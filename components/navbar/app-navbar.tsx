"use client";

import { DarkModeToggle } from "../dark-mode-toggle";
import useStateStore from "@/store/state-store";
import TruthyRenderer from "../truthy-renderer";
import { AppConstants } from "@/constants/constants";
import SidebarToogleButton from "./sidebar-toogle-button";
import UnknownFlowButton from "./unknown-flow-button";
import SettingsDropdown from "./settings-dropdown";
import Breadcrumbs from "./breadcrumbs";

export function AppNavbar() {
  const {
    toggleRightSidebar,
    rightSidebarOpen,
    toggleLeftSidebar,
    leftSidebarOpen,
  } = useStateStore();

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
        <UnknownFlowButton
          isSidebarOpen={!leftSidebarOpen}
          className="max-[440px]:hidden"
        />
        <Breadcrumbs className="ml-2 max-[800px]:hidden" />
        <div className="ml-auto flex items-center gap-2">
          <SettingsDropdown />
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
