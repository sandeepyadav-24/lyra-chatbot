import useStateStore from "@/store/state-store";
import TruthyRenderer from "../truthy-renderer";
import { ChevronRight, X } from "lucide-react";

export default function ChatWithTeam() {
  const { leftSidebarOpen, chatWithTeamOpen, setChatWithTeamOpen } =
    useStateStore();
  return (
    <TruthyRenderer value={leftSidebarOpen && chatWithTeamOpen}>
      <div className="flex flex-col items-start gap-2 border-app-popupBorder relative border rounded-md p-2 bg-app-popup">
        <p className="text-app-textPrimary text-sm">Chat with your team</p>
        <p className="text-app-textSecondary text-sm">
          Want to use AutoKAB with your team or business?
        </p>
        <button
          className="absolute right-2 top-2"
          onClick={() => setChatWithTeamOpen(false)}
        >
          <X className="w-4 h-4" />
        </button>
        <button className="flex flex-row items-center gap-2 bg-app-secondary w-full border border-app-primaryBorder rounded-md px-2 py-1 justify-center">
          <span>Chat with team</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </TruthyRenderer>
  );
}
