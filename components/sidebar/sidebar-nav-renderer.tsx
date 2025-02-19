"use client";

import React, { useEffect, useState } from "react";
import { MessageSquare, Database, List, BookOpen, ChevronRight, User, TrendingUp } from "lucide-react";
import { fetchAndLogChatMessages } from "../../api-service/chats";

interface NavItem {
  title: string;
  icon?: React.ReactNode;
  items?: NavItem[];
  onClick?: () => void;
}

const SidebarNavRenderer: React.FC = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [navItems, setNavItems] = useState<NavItem[]>([
    {
      title: "My Chats (0)",
      icon: <MessageSquare className="h-5 w-5" />,
      items: [
        { title: "Procurement Chat", items: [] },
        { title: "Previous 7 Days", items: [] },
        { title: "My Chat 3", items: [] },
        { title: "Imp Chats", items: [] },
        { title: "Analytics Research", items: [] },
      ],
    },
    { title: "My Data", icon: <Database className="h-5 w-5" />, items: [] },
    { title: "My Plans", icon: <List className="h-5 w-5" />, items: [] },
    {
      title: "Resources",
      icon: <BookOpen className="h-5 w-5" />,
      items: [
        { title: "Explore Use Case", items: [] },
        { title: "Documentation", items: [] },
        { title: "Team discussions", items: [] },
        { title: "Agent Labs", items: [] },
        { title: "Upgrade", items: [] },
      ],
    },
    { title: "Find Agent", icon: <User className="h-5 w-5" />, onClick: () => window.location.href = "http://localhost:3000/find-agent" },
    { title: "Outcome", icon: <TrendingUp className="h-5 w-5" />, onClick: () => window.location.href = "http://localhost:3000/dashboard/outcome" },
  ]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const userId = "123456789";
        const chatMessages = await fetchAndLogChatMessages(userId);
  
        if (!chatMessages?.messages.length) return;
  
        const newMessages = chatMessages.messages.map((msg) => ({
          title: msg.content,
        }));
  
        setNavItems((prevItems) =>
          prevItems.map((section) => {
            if (section.title.startsWith("My Chats")) {
              return {
                ...section,
                title: `My Chats (${chatMessages.messages.length})`,
                items: section.items?.map((chat) => {
                  if (chat.title === "Procurement Chat") {
                    return { ...chat, items: newMessages };
                  }
                  return chat;
                }),
              };
            }
            return section;
          })
        );
      } catch (error) {
        console.error("Error fetching chat messages:", error);
      }
    };
  
    fetchMessages();
  }, []);
  
  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside className={`transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-16"} h-screen p-2`}>
      <nav>
        <ul className="list-none">
          {navItems.map((item) => (
            <li key={item.title} className="mb-1">
              <div
                className="flex items-center p-2 cursor-pointer rounded"
                onClick={item.onClick ? item.onClick : () => toggleSection(item.title)}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {isSidebarOpen && <span>{item.title}</span>}
                {item.items && item.items.length > 0 && isSidebarOpen && (
                  <ChevronRight
                    className={`ml-auto h-4 w-4 transition-transform duration-200 ${
                      openSections[item.title] ? "rotate-90" : ""
                    }`}
                  />
                )}
              </div>
  
              {item.items && item.items.length > 0 && openSections[item.title] && isSidebarOpen && (
                <ul className="ml-4 list-none">
                  {item.items.map((subItem) => (
                    <li key={subItem.title} className="p-2 rounded">
                      {subItem.title}
  
                      {subItem.items && subItem.items.length > 0 && (
                        <ul className="ml-4 list-none">
                          {subItem.items.map((msg) => (
                            <li key={msg.title} className="p-2 text-sm text hover:bg-gray-200 rounded">
                              {msg.title}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarNavRenderer;
