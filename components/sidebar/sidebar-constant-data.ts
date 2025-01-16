import {
  BookOpen,
  Search,
  Users,
  Zap,
  Thermometer,
  MessageSquare,
  RefreshCcw,
  LayoutDashboard,
  Workflow,
} from "lucide-react";
import { SidebarNavRendererItem } from "./sidebar-nav-renderer";

const sidebarNavRendererData: SidebarNavRendererItem[] = [
  {
    title: "Playground",
    url: null,
    icon: LayoutDashboard,
    isShowChevron: true,
    items: [
      {
        title: "My Chats(3)",
        url: null,
        icon: MessageSquare,
        isShowChevron: true,
        items: [
          {
            title: "Today",
            url: "#",
            icon: null,
            isShowChevron: false,
            items: null,
          },
          {
            title: "Previous 7 Days",
            url: "#",
            icon: null,
            isShowChevron: false,
            items: null,
          },
          {
            title: "Procurement Chat",
            url: "#",
            icon: null,
            isShowChevron: false,
            items: null,
          },
          {
            title: "Imp Chats",
            url: "#",
            icon: null,
            isShowChevron: false,
            items: null,
          },
          {
            title: "Analytics Research",
            url: "#",
            icon: null,
            isShowChevron: false,
            items: null,
          },
        ],
      },
      {
        title: "My Plans",
        url: null,
        icon: Workflow,
        isShowChevron: true,
        items: [
          {
            title: "Build SQL",
            url: null,
            icon: null,
            isShowChevron: false,
            items: null,
          },
          {
            title: "Similarity Search",
            url: null,
            icon: null,
            isShowChevron: true,
            items: null,
          },
          {
            title: "A/B Testing",
            url: null,
            icon: null,
            isShowChevron: false,
            items: null,
          },
        ],
      },
    ],
  },
  {
    title: "Resources",
    url: null,
    icon: RefreshCcw,
    isShowChevron: true,
    items: [
      {
        title: "Explore use case",
        url: "#",
        icon: Search,
        isShowChevron: false,
        items: null,
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        isShowChevron: false,
        items: null,
      },
      {
        title: "Team discussions",
        url: "#",
        icon: Users,
        isShowChevron: false,
        items: null,
      },
      {
        title: "Agent Labs",
        url: "#",
        icon: Thermometer,
        isShowChevron: false,
        items: null,
      },
      {
        title: "Upgrade",
        url: "#",
        icon: Zap,
        isShowChevron: false,
        items: null,
      },
    ],
  },
];

export { sidebarNavRendererData };
