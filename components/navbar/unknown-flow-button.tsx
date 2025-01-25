import { cn } from "@/lib/utils";
import { PanelTop } from "lucide-react";
import React from "react";

export default function UnknownFlowButton({
  isSidebarOpen,
}: {
  isSidebarOpen: boolean;
}) {
  return (
    <button
      className={cn(
        "bg-app-universal flex items-center gap-2 text-app-primary rounded-md px-3 py-1",
        isSidebarOpen && "ml-4"
      )}
    >
      <PanelTop className="w-4 h-4" />
      <p className="text-sm">Unknown Flow</p>
    </button>
  );
}
