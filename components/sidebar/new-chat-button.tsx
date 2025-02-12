import { ChevronRight, MessageSquarePlus } from "lucide-react";
import TruthyRenderer from "../truthy-renderer";
import { Button } from "../ui/button"; // Your custom Button component
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import RightTooltip from "../right-tooltip";
import useStateStore from "@/store/state-store";
import { useRouter } from "next/navigation";

export default function NewChatButton() {
  const { leftSidebarOpen } = useStateStore();
  const router = useRouter();

  function handleNewChat() {
    router.push("/dashboard/new-chat");
  }

  return (
    <Button // Use your custom Button component directly
      variant={"outline"}
      className={cn(
        "flex items-center justify-start gap-2 w-full px-[6px] transition-all duration-300 border-app-primaryBorder bg-app-secondary",
        leftSidebarOpen ? "px-4" : "px-[7px] border-none bg-transparent"
      )}
      onClick={handleNewChat}
    >
      <RightTooltip tooltip="New Chat">
        {/* Use a <span> or other non-button element for the icon */}
        <span className="inline-flex items-center justify-center"> {/* Added for centering */}
          <MessageSquarePlus width={16} height={16} />
        </span>
      </RightTooltip>

      <TruthyRenderer value={leftSidebarOpen}>
        <motion.span
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          New Chat
        </motion.span>
      </TruthyRenderer>
      <TruthyRenderer value={leftSidebarOpen}>
        <ChevronRight width={16} height={16} className="ml-auto" />
      </TruthyRenderer>
    </Button>
  );
}