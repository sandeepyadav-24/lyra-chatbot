"use client";
import useStateStore from "@/store/state-store";
import DefaultPlans from "../new-chat/default-plans";
import NewChatHeader from "../new-chat/new-chat-header";
import ChatBubble from "./chat-bubble";
import { useEffect, useRef } from "react";
import { useSessionContext } from "@/provider/session-context";
import Home from "../new-chat/newplan";

const ChatUI = () => {
  const { chatMessages } = useStateStore();

  // Add this console log to debug the actual state
  console.log("Current chat messages:", chatMessages);
  const isMessageEmpty = chatMessages.length === 0;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  console.log({ msg: chatMessages });

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  if (!Array.isArray(chatMessages)) {
    return null; // or some loading state
  }

  const { flow } = useSessionContext();

  return (
    <div
      ref={scrollContainerRef}
      className="w-full flex-1 bg-[] overflow-y-auto py-4 relative"
    >
      {flow === "Known Flow" ? (
        <>
          <Home />
          {chatMessages.length > 0 && (
            <div className="flex flex-col gap-8 pt-10 max-w-[800px] mx-auto">
              {chatMessages.map((message, index) => (
                <ChatBubble
                  key={index}
                  message={message.message}
                  messageType={message.messageType}
                />
              ))}
            </div>
          )}
        </>
      ) : isMessageEmpty ? (
        <>
          <NewChatHeader />
          <DefaultPlans />
        </>
      ) : (
        <div className="flex flex-col gap-8 pt-10 max-w-[800px] mx-auto">
          {chatMessages.map((message, index) => (
            <ChatBubble
              key={index}
              message={message.message}
              messageType={message.messageType}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatUI;