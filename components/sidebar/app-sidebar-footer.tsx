import { CircleUser, Twitter } from "lucide-react";
import TruthyRenderer from "../truthy-renderer";
import { Button } from "../ui/button";
import { SidebarFooter, useSidebar } from "../ui/sidebar";
import { NavUser } from "../nav-user";
import Discord from "@/icons/discord";

export default function AppSidebarFooter() {
  const { state } = useSidebar();
  return (
    <SidebarFooter>
      <NavUser />
      <div className="w-full flex flex-row justify-between items-center">
        <Button variant="ghost" size="icon">
          <CircleUser />
        </Button>
        <TruthyRenderer value={state === "expanded"}>
          <div className="flex flex-row items-center">
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
