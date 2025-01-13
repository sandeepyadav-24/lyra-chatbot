"use client";

import * as React from "react";
import {
  BookOpen,
  Edit,
  CircleUser,
  MessageSquare,
  FileText,
  RefreshCcw,
  Search,
  Users,
  Thermometer,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { CompanyLogo } from "@/icons/logo";
import Link from "next/link";
import TruthyRenderer from "./truthy-renderer";
import Discord from "@/icons/discord";
import Twitter from "@/icons/twitter";
import { cn } from "@/lib/utils";
import SearchBar from "./sidebar/search-bar";

const data = {
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
      title: "My Data",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "Resources",
          url: "#",
          icon: RefreshCcw,
        },
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
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex flex-row items-center justify-between pt-4">
        <Link href="/" className={cn(state === "collapsed" ? "p-0" : "p-2")}>
          <CompanyLogo />
        </Link>
        <TruthyRenderer value={state === "expanded"}>
          <Button variant="ghost" size="icon" title="Edit">
            <Edit />
          </Button>
        </TruthyRenderer>
      </SidebarHeader>
      <SidebarContent>
        <SearchBar />
        <NavMain items={data.navMain} />
        <NavMain items={data.navMain2} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
        <div className="w-full flex flex-row justify-between items-center">
          <Button variant="ghost" size="icon">
            <CircleUser />
          </Button>
          <TruthyRenderer value={state === "expanded"}>
            <div className="flex flex-row items-center">
              <Button variant="ghost" size="icon">
                <Discord />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter />
              </Button>
            </div>
          </TruthyRenderer>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
