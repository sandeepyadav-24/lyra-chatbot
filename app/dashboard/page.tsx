import Header from "@/components/dashboard/header";
import MainSection from "@/components/dashboard/main-section";
// import LiveChatUI from "@/components/live-chat/live-chat-ui";

export default function Page() {
  return (
    // <div>
    //   <LiveChatUI />
    // </div>

      <div className="p-9 w-full flex-1 bg-app-secondary rounded-lg flex flex-col gap-4">
      <Header />
      <MainSection />
    </div> 
  );

}
