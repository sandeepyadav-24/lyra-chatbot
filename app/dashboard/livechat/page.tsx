"use client";

import LiveChat from "@/components/live-chat/live-chat-ui";
import ChatInput from "@/components/chat-input/chat-input";

export default function ProfilePage() {
  return (
    <>
    <div className="w-full  h-full bg-app-secondary flex flex-col rounded-lg pb-5 px-4 overflow-hidden overflow-y-auto ">
      <LiveChat />
    </div>
    <ChatInput />
    </>

  );
}

