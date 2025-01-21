import ChatInput from "@/components/chat-input/chat-input";

export default function Page() {
  return (
    <div className="w-full  h-full bg-app-secondary flex flex-col rounded-lg pb-10 px-4">
      <div className="w-full flex-1"></div>
      <ChatInput />
    </div>
  );
}
