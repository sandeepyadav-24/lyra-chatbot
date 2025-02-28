import { cn } from "@/lib/utils";
import { PanelTop } from "lucide-react";
import React from "react";
import { useSessionContext } from "@/provider/session-context";

interface FlowButtonProps {
  isSidebarOpen: boolean;
  className?: string;
  onFlowChange?: (flow: string) => void; // Callback is still optional
}

export default function FlowButton({
  isSidebarOpen,
  className,
  onFlowChange,
}: FlowButtonProps) {
  const { flow, setFlow } = useSessionContext();

  const handleToggle = () => {
    const newFlow = flow === "Known Flow" ? "Unknown Flow" : "Known Flow";
    setFlow(newFlow); // Update Context
    if (onFlowChange) { // Call the callback if it exists
      onFlowChange(newFlow);
    }
  };

  return (
    <div className="relative">
      <button
        className={cn(
          "bg-app-universal flex items-center gap-2 text-app-primary rounded-md px-3 py-1",
          isSidebarOpen && "ml-4",
          className
        )}
        onClick={handleToggle}
      >
        <PanelTop className="w-4 h-4" />
        <p className="text-sm">{flow}</p>
        {/* Simple toggle switch */}
        <div
          className={cn(
            "w-10 h-5 bg-gray-300 rounded-full p-1 flex items-center",
            flow === "Unknown Flow" && "bg-app-primary"
          )}
        >
          <div
            className={cn(
              "w-3 h-3 bg-white rounded-full transition-transform duration-200",
              flow === "Unknown Flow" ? "translate-x-5" : "translate-x-0"
            )}
          />
        </div>
      </button>
    </div>
  );
}