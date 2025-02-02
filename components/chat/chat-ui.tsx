"use client";
import useStateStore from "@/store/state-store";
import DefaultPlans from "../new-chat/default-plans";
import NewChatHeader from "../new-chat/new-chat-header";
import ChatBubble from "./chat-bubble";

const ChatUI = () => {
  const { chatMessages } = useStateStore();
  const isMessageEmpty = chatMessages.length === 0;

  return (
    <div
      ref={(node) => {
        if (node) {
          node.scrollTop = node.scrollHeight;
        }
      }}
      className="w-full flex-1 overflow-y-auto py-4 relative"
    >
      {isMessageEmpty ? (
        <>
          <NewChatHeader />
          <DefaultPlans />
        </>
      ) : (
        <div className="flex flex-col gap-8 pt-10 max-w-[800px] mx-auto">
          {chatMessages.map((message) => (
            <ChatBubble
              key={message.message}
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
