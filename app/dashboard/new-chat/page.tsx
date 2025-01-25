import ChatInput from "@/components/chat-input/chat-input";
import DefaultPlans from "@/components/new-chat/default-plans";
import NewChatHeader from "@/components/new-chat/new-chat-header";

export default function Page() {
  return (
    <div className="w-full  h-full bg-app-secondary flex flex-col rounded-lg pb-10 px-4">
      <div className="w-full flex-1 overflow-y-auto py-4">
        <NewChatHeader />
        <DefaultPlans />
      </div>
      <ChatInput />
    </div>
  );
}
