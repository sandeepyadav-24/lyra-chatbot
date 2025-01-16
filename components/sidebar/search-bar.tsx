import { Input } from "@/components/ui/input";
import { useSidebar } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import TruthyRenderer from "../truthy-renderer";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { flushSync } from "react-dom";
import RightTooltip from "../right-tooltip";

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { state, toggleSidebar } = useSidebar();
  return (
    <div
      className={cn(
        "flex flex-row items-center border rounded-md",
        state === "expanded" ? "border" : "border-transparent"
      )}
    >
      <RightTooltip tooltip="Search">
        <Button
          onClick={() => {
            flushSync(() => {
              if (state === "collapsed") {
                toggleSidebar();
              }
            });
            inputRef.current?.focus();
          }}
          variant="ghost"
          size="icon"
        >
          <Search />
        </Button>
      </RightTooltip>
      <TruthyRenderer value={state === "expanded"}>
        <Input
          ref={inputRef}
          className="border-none pl-0 outline-none shadow-none focus-visible:ring-0"
          placeholder="Search chats..."
        />
      </TruthyRenderer>
    </div>
  );
}
