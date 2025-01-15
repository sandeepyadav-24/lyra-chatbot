import {
  BookOpen,
  Search,
  Users,
  Zap,
  Thermometer,
  MessageSquare,
  RefreshCcw,
} from "lucide-react";

const sidebarConstantData = {
  navMain: [
    {
      title: "My Chats(3)",
      url: "#",
      icon: MessageSquare,
      isActive: true,
      items: [
        {
          title: "Today",
          url: "#",
        },
        {
          title: "Previous 7 Days",
          url: "#",
        },
        {
          title: "Procurement Chat",
          url: "#",
        },
        {
          title: "Imp Chats",
          url: "#",
        },
        {
          title: "Analytics Research",
          url: "#",
        },
      ],
    },
  ],
  navMain2: [
    {
      title: "Resources",
      url: "#",
      icon: RefreshCcw,
      items: [
        {
          title: "Explore use case",
          url: "#",
          icon: Search,
        },
        {
          title: "Documentation",
          url: "#",
          icon: BookOpen,
        },
        {
          title: "Team discussions",
          url: "#",
          icon: Users,
        },
        {
          title: "Agent Labs",
          url: "#",
          icon: Thermometer,
        },
        {
          title: "Upgrade",
          url: "#",
          icon: Zap,
        },
      ],
    },
  ],
};

export default sidebarConstantData;
