// app/dashboard/page.tsx
import DashboardPage from "@/components/outcomeScreen/dashboard-page"; // Adjust path if needed
import ChatInput from "@/components/chat-input/chat-input";

export default function Page() {
  return (
    <>
    <div className="w-full  h-full bg-app-secondary flex flex-col rounded-lg pb-5 px-4 overflow-hidden overflow-y-auto ">
      <DashboardPage />
    </div>
    <ChatInput />
    </>
  );
}