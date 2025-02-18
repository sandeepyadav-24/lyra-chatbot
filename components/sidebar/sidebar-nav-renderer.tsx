


// "use client";

// import React, { useEffect, useState } from "react";
// import { MessageSquare, Database, List, BookOpen } from "lucide-react";
// import { fetchAndLogChatMessages } from "../../api-service/chats"; // Import the fetch function

// interface NavItem {
//   title: string;
//   icon?: React.ReactNode;
//   items?: NavItem[]; // Items might be undefined
// }

// const SidebarNavRenderer: React.FC = () => {
//   const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
//   const [navItems, setNavItems] = useState<NavItem[]>([
//     {
//       title: "My Chats (0)", // Placeholder for chats count
//       icon: <MessageSquare className="h-5 w-5" />,
//       items: [
//         { title: "Procurement Chat", items: [] }, // Placeholder for messages
//         { title: "Previous 7 Days", items: [] },
//         { title: "My Chat 3", items: [] },
//         { title: "Imp Chats", items: [] },
//         { title: "Analytics Research", items: [] },
//       ],
//     },
//     { title: "My Data", icon: <Database className="h-5 w-5" />, items: [] },
//     { title: "My Plans", icon: <List className="h-5 w-5" />, items: [] },
//     {
//       title: "Resources",
//       icon: <BookOpen className="h-5 w-5" />,
//       items: [
//         { title: "Explore Use Case", items: [] },
//         { title: "Documentation", items: [] },
//         { title: "Team discussions", items: [] },
//         { title: "Agent Labs", items: [] },
//         { title: "Upgrade", items: [] },
//       ],
//     },
//   ]);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const userId = "your-user-id"; // Replace with actual user ID
//         const chatMessages = await fetchAndLogChatMessages(userId);

//         if (!chatMessages?.messages.length) return;

//         // Extract messages content
//         const newMessages = chatMessages.messages.map((msg) => ({
//           title: msg.content,
//         }));

//         // Update state with new messages in "Procurement Chat"
//         setNavItems((prevItems) =>
//           prevItems.map((section) => {
//             if (section.title === "My Chats (0)") {
//               return {
//                 ...section,
//                 title: `My Chats (${chatMessages.messages.length})`,
//                 items: section.items?.map((chat) =>
//                   chat.title === "Procurement Chat"
//                     ? { ...chat, items: newMessages }
//                     : chat
//                 ),
//               };
//             }
//             return section;
//           })
//         );
//       } catch (error) {
//         console.error("Error fetching chat messages:", error);
//       }
//     };

//     fetchMessages();
//   }, []);

//   const toggleSection = (title: string) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [title]: !prev[title],
//     }));
//   };

//   const renderNavItem = (item: NavItem) => (
//     <li key={item.title} className="mb-1">
//       <div
//         className="flex items-center p-2 cursor-pointer hover:bg-gray-100 rounded"
//         onClick={() => toggleSection(item.title)}
//       >
//         {item.icon && <span className="mr-2">{item.icon}</span>}
//         {item.title}
//       </div>
//       {item.items && item.items.length > 0 && openSections[item.title] && (
//         <ul className="ml-4 list-none">
//           {item.items.map(renderNavItem)}
//         </ul>
//       )}
//     </li>
//   );

//   return (
    
//     <nav>
//       <ul>{navItems.map(renderNavItem)}</ul>
//     </nav>
//   );
// };

// export default SidebarNavRenderer;  


"use client";

import React, { useEffect, useState } from "react";
import { MessageSquare, Database, List, BookOpen, ChevronRight } from "lucide-react";
import { fetchAndLogChatMessages } from "../../api-service/chats";

interface NavItem {
  title: string;
  icon?: React.ReactNode;
  items?: NavItem[];
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
  ]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const userId = "123456789";
        const chatMessages = await fetchAndLogChatMessages(userId);
  
        if (!chatMessages?.messages.length) return;
  
        // Map new messages
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
                    return { ...chat, items: newMessages }; // Update messages in Procurement Chat
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
                className="flex items-center p-2 cursor-pointer  rounded"
                onClick={() => toggleSection(item.title)}
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
  
              {/* 🔥 Fix: Ensure nested items render properly */}
              {item.items && item.items.length > 0 && openSections[item.title] && isSidebarOpen && (
                <ul className="ml-4 list-none">
                  {item.items.map((subItem) => (
                    <li key={subItem.title} className="p-2  rounded">
                      {subItem.title}
  
                      {/* 🔥 Fix: Ensure "Procurement Chat" messages render */}
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
