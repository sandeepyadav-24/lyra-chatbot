import { Twitter, LogOut } from "lucide-react";
import TruthyRenderer from "../truthy-renderer";
import { Button } from "../ui/button";
import Discord from "@/icons/discord";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import useStateStore from "@/store/state-store";
import { signOut } from "next-auth/react";
import ChatWithTeam from "./chat-with-team";
import SystemIsOnline from "./system-is-online";

export default function AppSidebarFooter() {
  const { data: session } = useSession();
  const { leftSidebarOpen } = useStateStore();

  async function logout() {
    await signOut({ redirectTo: window.location.origin + "/" });
  }

  return (
    <footer className="flex flex-col gap-3 p-4">
      <ChatWithTeam />
      <button
        className={cn(
          "gap-2 flex items-center hover:bg-app-secondary rounded-md",
          leftSidebarOpen ? "px-2 py-2" : "px-1 py-2"
        )}
        onClick={logout}
      >
        <LogOut className="w-4 h-4" />

        <span
          className="inline-block truncate"
          style={{ display: leftSidebarOpen ? "block" : "none" }}
        >
          Logout
        </span>
      </button>
      <div className={cn("w-full flex flex-row gap-2 items-center")}>
        <Avatar className="w-7 h-7">
          <AvatarImage src={session?.user?.image!} />
          <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
        </Avatar>
        <TruthyRenderer value={leftSidebarOpen && !!session?.user?.name}>
          <p
            className={cn(
              "text-sm font-medium transition-all duration-300 truncate",
              !leftSidebarOpen ? "hidden opacity-0" : "block opacity-100"
            )}
          >
            {session?.user?.name}
          </p>
        </TruthyRenderer>
        <TruthyRenderer value={leftSidebarOpen}>
          <div className="flex flex-row items-center ml-auto">
            <Button variant="ghost" size="icon">
              <Discord />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter />
            </Button>
          </div>
        </TruthyRenderer>
      </div>
      <TruthyRenderer value={leftSidebarOpen}>
        <SystemIsOnline />
      </TruthyRenderer>
    </footer>
  );
}
