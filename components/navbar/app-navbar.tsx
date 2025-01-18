"use client";

import { DarkModeToggle } from "../dark-mode-toggle";
import { useSidebar } from "../ui/sidebar";
import useStateStore from "@/store/state-store";
import TruthyRenderer from "../truthy-renderer";
import { AppConstants } from "@/constants/constants";
import SidebarToogleButton from "./sidebar-toogle-button";

export function AppNavbar() {
  const { toggleRightSidebar, rightSidebarOpen } = useStateStore();
  const { state, toggleSidebar } = useSidebar();
  return (
    <header className="flex py-2 shrink-0 items-center gap-2 transition-[width,height] ease-linear ">
      <div className="flex items-center gap-2 px-4 w-full">
        <SidebarToogleButton
          isSidebarOpen={state === "expanded"}
          toggleSidebar={toggleSidebar}
          isLeftSidebar={true}
        />
        <TruthyRenderer value={state === "collapsed"}>
          <p className="text-xl font-bold">{AppConstants.COMPANY_NAME}</p>
        </TruthyRenderer>
        <div className="ml-auto">
          <DarkModeToggle />
        </div>
        <SidebarToogleButton
          isSidebarOpen={rightSidebarOpen}
          toggleSidebar={toggleRightSidebar}
          isLeftSidebar={false}
        />
      </div>
    </header>
  );
}
