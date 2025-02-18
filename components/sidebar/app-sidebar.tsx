"use client";

import * as React from "react";
import SearchBar from "./search-bar";
import NewChatButton from "./new-chat-button";
import CompanyLogoComponent from "./company-logo-component";
import AppSidebarFooter from "./app-sidebar-footer";
import { sidebarNavRendererData } from "./sidebar-constant-data";
import ChatPage from "./sidebar-nav-renderer";
import { LeftSidebarRoot } from "./components";

export function AppSidebar() {
  return (
    <LeftSidebarRoot>
      <section className="flex flex-col gap-4 h-full">
        <CompanyLogoComponent />
        <main className="flex-1 flex flex-col gap-4 p-4 overflow-y-auto">
          <NewChatButton />
          <SearchBar />
          <ChatPage/>
        </main>
        <AppSidebarFooter />
      </section>
    </LeftSidebarRoot>
  );
}
