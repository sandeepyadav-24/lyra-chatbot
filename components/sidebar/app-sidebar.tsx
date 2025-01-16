"use client";

import * as React from "react";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";
import SearchBar from "./search-bar";
import NewChatButton from "./new-chat-button";
import CompanyLogoComponent from "./company-logo-component";
import AppSidebarFooter from "./app-sidebar-footer";
import { sidebarNavRendererData } from "./sidebar-constant-data";
import SidebarNavRenderer from "./sidebar-nav-renderer";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <CompanyLogoComponent />
      <SidebarContent>
        <div className="px-2 flex flex-col gap-4 mt-4">
          <NewChatButton />
          <SearchBar />
          <SidebarNavRenderer data={sidebarNavRendererData} />
        </div>
      </SidebarContent>
      <AppSidebarFooter />
      <SidebarRail />
    </Sidebar>
  );
}
