import { CircleUser, Twitter } from "lucide-react";
import TruthyRenderer from "../truthy-renderer";
import { Button } from "../ui/button";
import { SidebarFooter, useSidebar } from "../ui/sidebar";
import { NavUser } from "../nav-user";
import Discord from "@/icons/discord";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";

export default function AppSidebarFooter() {
  const { state } = useSidebar();
  const { data: session } = useSession();

  const isCollapsed = state === "collapsed";

  return (
    <SidebarFooter>
      <NavUser />
      <div
        className={cn(
          "w-full flex flex-row gap-2 items-center",
          isCollapsed ? "px-0" : "px-2"
        )}
      >
        <Avatar className="w-7 h-7">
          <AvatarImage src={session?.user?.image!} />
          <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
        </Avatar>
        <TruthyRenderer value={!isCollapsed && !!session?.user?.name}>
          <p
            className={cn(
              "text-sm font-medium transition-all duration-300 truncate",
              isCollapsed ? "hidden opacity-0" : "block opacity-100"
            )}
          >
            {session?.user?.name}
          </p>
        </TruthyRenderer>
        <TruthyRenderer value={state === "expanded"}>
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
    </SidebarFooter>
  );
}
