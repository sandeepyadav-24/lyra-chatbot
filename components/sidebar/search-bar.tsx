import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import TruthyRenderer from "../truthy-renderer";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { flushSync } from "react-dom";
import RightTooltip from "../right-tooltip";
import useStateStore from "@/store/state-store";

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { leftSidebarOpen, toggleLeftSidebar } = useStateStore();

  return (
    <div
      className={cn(
        "flex flex-row items-center bg-app-tertiary border-none rounded-md p-2 gap-2",
        leftSidebarOpen ? "bg-app-tertiary" : "bg-transparent"
      )}
    >
      <RightTooltip tooltip="Search">
        <button
          tabIndex={-1}
          onClick={() => {
            flushSync(() => {
              if (!leftSidebarOpen) {
                toggleLeftSidebar();
              }
            });
            inputRef.current?.focus();
          }}
          className="border-none bg-transparent p-0"
        >
          <Search className="w-4 h-4" />
        </button>
      </RightTooltip>
      <TruthyRenderer value={leftSidebarOpen}>
        <input
          ref={inputRef}
          className="border-none flex-1 bg-transparent pl-0 outline-none shadow-none "
          placeholder="Search chats..."
        />
      </TruthyRenderer>
    </div>
  );
}
