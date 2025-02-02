import ChatInput from "@/components/chat-input/chat-input";
import ChatUI from "@/components/chat/chat-ui";

export default function Page() {
  return (
    <div className="w-full  h-full bg-app-secondary flex flex-col rounded-lg pb-10 px-4">
      <ChatUI />
      <ChatInput />
    </div>
  );
}
