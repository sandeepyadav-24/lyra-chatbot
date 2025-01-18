"use client";

import { RightSidebarRoot } from "./components";
import { SidebarHeader } from "./sidebar-header";

export function RightSidebar() {
  return (
    <RightSidebarRoot>
      <div className="h-full w-full p-4 flex flex-col gap-4">
        <h2 className="text-base font-bold w-full text-center truncate">
          AutoKAB Plans
        </h2>
        <div className="w-full flex-1 bg-app-secondary p-5 flex flex-col gap-8 rounded-lg overflow-y-auto">
          <SidebarHeader />
          <p className="truncate">Similarity Search Analysis Plan</p>
        </div>
      </div>
    </RightSidebarRoot>
  );
}
