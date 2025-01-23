import Header from "@/components/dashboard/header";
import MainSection from "@/components/dashboard/main-section";

export default function Page() {
  return (
    <div className="p-9 w-full flex-1 bg-app-secondary rounded-lg flex flex-col gap-4">
      <Header />
      <MainSection />
    </div>
  );
}
