"use client";
import { FormEvent, useState } from "react";
import { TbMessageChatbot } from "react-icons/tb";
import BotMessage from "./ui/bot-message";
import UserMessage from "./ui/user-message";
import ChatInput from "./ui/chat-input";
import { chatCompletion } from "@/actions";

export type Message = {
  content: string;
  role: "user" | "assistant" | "system";
};

export default function Chatbot() {
  const [showChat, setShowChat] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello, how may I help you today?" },
  ]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();

    console.log("USER MESSAGE", userMessage);

    if (!userMessage) return;

    // Create new message object
    const newMessage: Message = { role: "user", content: userMessage };
    console.log("NEW MESSAGE", newMessage);

    // Update the message state
    setMessages((prevMessage) => [...prevMessage, newMessage]);
    setLoading(true);

    // Request to OPENAI
    try {
      // copy of messages
      const chatMessages = messages.slice(1);
      console.log("CHAT MESSAGES", chatMessages);

      // Call the chat completion API
      const res = await chatCompletion([...chatMessages, newMessage]);
      console.log("RESPONSE", res);
      
      setUserMessage("");
      setMessages(prevMessages => [...prevMessages, res]);
      
    } catch (error) {
      console.log("API Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TbMessageChatbot
        size={64}
        onClick={() => setShowChat(!showChat)}
        className="fixed right-12 bottom-[calc(1rem)] hover:cursor-pointer"
      />

      {showChat && (
        <div className="fixed right-12 bottom-[calc(4rem+1.5rem)] border hover:cursor-pointer p-5 shadow-md shadow-white h-[474px] w-[500px]">
          <div className="flex flex-col h-full">
            {/* CHAT HEADER  */}
            <div>
              <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
              <p>Powered by OpenAI</p>
            </div>

            {/* CHAT CONTAINER  */}
            <div className="flex flex-col flex-1 items-center p-2 mt-5 overflow-y-auto">
              {messages &&
                messages.map((m, i) => {
                  return m.role === "assistant" ? (
                    <BotMessage {...m} key={i} />
                  ) : (
                    <UserMessage {...m} key={i} />
                  );
                })}
            </div>

            {/* MESSAGE INPUT  */}
            <ChatInput
              userMessage={userMessage}
              setUserMessage={setUserMessage}
              handleSendMessage={handleSendMessage}
            />
          </div>
        </div>
      )}
    </>
  );
}
