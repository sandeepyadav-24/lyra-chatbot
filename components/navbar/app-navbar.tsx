"use client";

import { DarkModeToggle } from "../dark-mode-toggle";
import useStateStore from "@/store/state-store";
import TruthyRenderer from "../truthy-renderer";
import { AppConstants } from "@/constants/constants";
import SidebarToogleButton from "./sidebar-toogle-button";
import { useSessionContext } from "@/provider/session-context";

export function AppNavbar() {
  const {
    toggleRightSidebar,
    rightSidebarOpen,
    toggleLeftSidebar,
    leftSidebarOpen,
  } = useStateStore();
  const session = useSessionContext();
  console.log(session);

  return (
    <header className="flex py-2 shrink-0 items-center gap-2 transition-[width,height] ease-linear ">
      <div className="flex items-center gap-2 px-4 w-full">
        <SidebarToogleButton
          isSidebarOpen={leftSidebarOpen}
          toggleSidebar={toggleLeftSidebar}
          isLeftSidebar={true}
        />
        <TruthyRenderer value={!leftSidebarOpen}>
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
