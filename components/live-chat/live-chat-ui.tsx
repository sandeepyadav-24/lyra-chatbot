"use client";

import { useState } from "react";
import Image from "next/image";

const LiveChatUI = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "John Alfaro",
      text: "",
      color: "bg-red-500",
      avatar: "/avatar1.png",
      position: "top-10 left-1/2 -translate-x-1/2",
    },
    {
      id: 2,
      sender: "John Alfaro",
      text: "",
      color: "bg-purple-600",
      avatar: "/avatar1.png",
      position: "top-1/3 left-10",
    },
    {
      id: 3,
      sender: "Sha",
      text: "Ok, I'll edit and send it back",
      color: "bg-blue-500",
      avatar: "/avatar2.png",
      position: "top-1/3 right-10",
    },
    {
      id: 4,
      sender: "Bailey Uguz",
      text: "Yep, I have a new concept for tomorrow",
      color: "bg-green-500",
      avatar: "/avatar3.png",
      position: "bottom-40 right-10",
    },
  ]);

  return (
    <div className="relative flex flex-col items-center justify-center h-[90vh] bg-gray-100 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <h1 className="text-3xl font-bold my-6">Live Chat</h1>

      {/* Chat Bubbles */}
      <div className="flex flex-col  space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`absolute flex items-center px-4 py-2 ${message.color} text-white rounded-2xl max-w-xs ${message.position}`}
          >
            <Image
              src={message.avatar}
              alt={message.sender}
              width={30}
              height={30}
              className="rounded-full mr-2"
            />
            <div>
              <div className="font-semibold">{message.sender}</div>
              {message.text && <p className="text-sm">{message.text}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Chat Button */}
      <button className="absolute bottom-8 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-lg shadow-lg">
        Chat with us
      </button>
    </div>
  );
};

export default LiveChatUI;
