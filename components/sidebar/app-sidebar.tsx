"use client";

import * as React from "react";
import SearchBar from "./search-bar";
import NewChatButton from "./new-chat-button";
import CompanyLogoComponent from "./company-logo-component";
import AppSidebarFooter from "./app-sidebar-footer";
import { sidebarNavRendererData } from "./sidebar-constant-data";
import SidebarNavRenderer from "./sidebar-nav-renderer";
import { LeftSidebarRoot } from "./components";
import { useGetChatMessages } from "../../api-service/chats";

export function AppSidebar() {
  const chatId = "555555"; // Replace with dynamic chat ID if needed
  const { data: chatMessages } = useGetChatMessages(chatId);

  // Extracting message contents
  const messageItems = chatMessages?.messages.map((msg) => ({
    title: msg.content,
    url: "#",
    icon: null,
    isShowChevron: false,
    items: [],
  })) || [];

  // Clone sidebar data and update "Today" & "My Chats(3)"
  const updatedSidebarData = sidebarNavRendererData.map((section) => {
    if (section.title === "Playground") {
      return {
        ...section,
        items: section.items?.map((item) => {
          // Update "Today" section
          if (item.title === "Today") {
            return { ...item, items: messageItems };
          }
          // Update "My Chats(3)"
          if (item.title.startsWith("My Chats")) {
            return { ...item, items: messageItems };
          }
          return item;
        }) || [], // Ensure items is never null
      };
    }
    return section;
  });

  return (
    <LeftSidebarRoot>
      <section className="flex flex-col gap-4 h-full">
        <CompanyLogoComponent />
        <main className="flex-1 flex flex-col gap-4 p-4 overflow-y-auto">
          <NewChatButton />
          <SearchBar />
          <SidebarNavRenderer data={updatedSidebarData} />
        </main>
        <AppSidebarFooter />
      </section>
    </LeftSidebarRoot>
  );
}
