'use client';
import { useState } from "react";
import { TbMessageChatbot } from "react-icons/tb";
import BotMessage from "./ui/bot-message";
import UserMessage from "./ui/user-message";
import ChatInput from "./ui/chat-input";

export default function Chatbot() {
    const [showChat, setShowChat] = useState(false);


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
                    <BotMessage />
                    <UserMessage />
                </div>

                {/* MESSAGE INPUT  */}
                <ChatInput />

            </div>
        </div>
      )

      }
    </>
  );
}
