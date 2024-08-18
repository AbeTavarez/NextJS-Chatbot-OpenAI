"use server";
import OpenAI from "openai";
import { Message } from "@/components/Chatbot/chatbot";
import { fetchFAQS } from "./mongodb-actions";
import { FAQDocument } from "@/types";

const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


/**
 * Chat Completion
 * @param chatMessages
 * @returns
 */
export async function chatCompletion(chatMessages: Message[]) {
  try {
    console.log("FROM BACKEND", chatMessages);

    // Fetch FAQS from DB
    const document: FAQDocument | null = await fetchFAQS();

    if (!document) {
      throw new Error('Error fetching FAQS');
    }

    // checking if the user question is in the FAQ array
    const faqsAnswer = document.faqs.find((faq) =>
      chatMessages
        .at(-1)
        ?.content.toLowerCase()
        .includes(faq.question.toLowerCase()),
    );

    if (faqsAnswer) {
      console.log(faqsAnswer);
      return { role: "assistant", content: faqsAnswer.answer } as Message;
    }

    console.log(`Reaching out to OPENAI API...`);

    // Chat to be send to OPEN AI
    const chat = [
      { role: "system", content: "You are a helpful assistant" },
      ...document.faqs.map((faq) => ({
        role: "system",
        content: `Q: ${faq.question}\nA: ${faq.answer}`,
      })),
      ...chatMessages,
    ];

    // Response
    const completion = await openAI.chat.completions.create({
      messages: chat as OpenAI.ChatCompletionMessageParam[],
      model: "gpt-4o-mini",
    });

    if (!completion) {
      throw new Error("Invalid response from OPENAI API!");
    }

    // Bot/Assistant Message
    const assistantMessage = completion.choices[0].message?.content;

    if (!assistantMessage) {
      throw new Error("No message from OPENAI API");
    }

    console.log("COMPLETION", completion.choices[0].message.content);
    return { role: "assistant", content: assistantMessage } as Message;
  } catch (error) {
    console.log(error);
    return {
      role: "assistant",
      content: "I'm sorry, something went wrong. Please ty again later.",
    } as Message;
  }
}
