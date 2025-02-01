"use client";

import { RightSidebarRoot } from "./components";
import { SidebarHeader } from "./sidebar-header";
import { motion } from "framer-motion";
import StepRenderer from "./step-renderer";
export function RightSidebar() {
  return (
    <RightSidebarRoot>
      <motion.div
        className="h-full w-full p-4 flex flex-col gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-base font-bold w-full text-center truncate">
          AutoKAB Plans
        </h2>
        <div className="w-full flex-1 bg-app-secondary p-5 flex flex-col gap-8 rounded-lg overflow-y-auto">
          <SidebarHeader />
          <StepRenderer />
        </div>
      </motion.div>
    </RightSidebarRoot>
  );
}
