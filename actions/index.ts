'use server';
import OpenAI from "openai";
import { Message } from "@/components/Chatbot/chatbot";

const openAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});




/**
 * Chat Completion
 * @param chatMessages 
 * @returns 
 */
export async function chatCompletion(chatMessages: Message[]) {
    console.log('FROM BACKEND', chatMessages);
    
    const chat = [
        {role: 'system', content: 'You are a helpful assistant'},
        ...chatMessages
    ];

    const completion = await openAI.chat.completions.create({
        messages: chat,
        model: 'gpt-4o-mini'
    });

    console.log('COMPLETION', completion.choices[0]);
    return completion; 
}