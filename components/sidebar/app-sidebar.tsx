"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";
import SearchBar from "./search-bar";
import NewChatButton from "./new-chat-button";
import CompanyLogoComponent from "./company-logo-component";
import AppSidebarFooter from "./app-sidebar-footer";
import sidebarConstantData from "./sidebar-constant-data";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <CompanyLogoComponent />
      <SidebarContent>
        <NewChatButton />
        <SearchBar />
        <NavMain items={sidebarConstantData.navMain} />
        <NavMain items={sidebarConstantData.navMain2} />
      </SidebarContent>
      <AppSidebarFooter />
      <SidebarRail />
    </Sidebar>
  );
}
