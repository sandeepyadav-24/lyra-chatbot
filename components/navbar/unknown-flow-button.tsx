import { cn } from "@/lib/utils";
import { PanelTop, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { useSessionContext } from "@/provider/session-context";

interface FlowButtonProps {
  isSidebarOpen: boolean;
  className?: string;
  onFlowChange?: (flow: string) => void; // Callback is now optional
}

export default function FlowButton({
  isSidebarOpen,
  className,
  onFlowChange,
}: FlowButtonProps) {
  const { flow, setFlow } = useSessionContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const flowOptions = ["Known Flow", "Unknown Flow"];

  const handleFlowSelect = (option: string) => {
    setFlow(option); // Update Context
    if (onFlowChange) {  // Call the callback if it exists
      onFlowChange(option);
    }
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        className={cn(
          "bg-app-universal flex items-center gap-2 text-app-primary rounded-md px-3 py-1",
          isSidebarOpen && "ml-4",
          className
        )}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <PanelTop className="w-4 h-4" />
        <p className="text-sm">{flow}</p> {/* Use 'flow' from Context */}
        <ChevronDown className="w-4 h-4" />
      </button>

      {isDropdownOpen && (
        <div
          className={cn(
            "absolute mt-2 bg-app-universal rounded-md shadow-lg",
            isSidebarOpen ? "left-4" : "left-0"
          )}
        >
          {flowOptions.map((option) => ( // No need for index if just using option
            <button
              key={option} // Use option as key - more robust
              className="w-full text-left px-3 py-1 text-sm text-app-primary hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
              onClick={() => handleFlowSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}