"use client";
import FindAgent from "@/components/find-Agent/find";
import {RightSidebar} from "@/components/right-sidebar/right-sidebar";
import {AppNavbar} from "@/components/navbar/app-navbar";
import Breadcrumbs from "@/components/navbar/breadcrumbs";

// Rest of the code remains the same

export default function Page() {
  


  return (
    <div className="bg-app-primary w-screen h-[100dvh] flex">
    
      <div className="flex-1 flex flex-col">
        <AppNavbar />
        <div className="min-[800px]:hidden px-6 py-3">
          <Breadcrumbs />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 overflow-y-auto">
        <FindAgent />
        </div>
      </div>
      <RightSidebar />
    </div>
  );
}
