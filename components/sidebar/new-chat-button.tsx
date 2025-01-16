import { ChevronRight, MessageSquarePlus } from "lucide-react";
import { useSidebar } from "../ui/sidebar";
import TruthyRenderer from "../truthy-renderer";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import RightTooltip from "../right-tooltip";

export default function NewChatButton() {
  const { state } = useSidebar();
  return (
    <Button
      variant={"outline"}
      className={cn(
        "flex items-center justify-start gap-2 w-full px-[6px] transition-all duration-300",
        state === "expanded" ? "px-4" : "px-[7px] border-none bg-transparent"
      )}
    >
      <RightTooltip tooltip="New Chat">
        <button className="border-none bg-transparent p-0">
          <MessageSquarePlus width={16} height={16} />
        </button>
      </RightTooltip>

      <TruthyRenderer value={state === "expanded"}>
        <motion.span
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          New Chat
        </motion.span>
      </TruthyRenderer>
      <TruthyRenderer value={state === "expanded"}>
        <ChevronRight width={16} height={16} className="ml-auto" />
      </TruthyRenderer>
    </Button>
  );
}
