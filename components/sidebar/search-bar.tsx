import { Input } from "@/components/ui/input";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  useSidebar,
} from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import TruthyRenderer from "../truthy-renderer";
import { cn } from "@/lib/utils";

export default function SearchBar() {
  const { state } = useSidebar();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarGroupContent>
        <div
          className={cn(
            "flex flex-row items-center border rounded-md",
            state === "expanded" ? "border" : "border-transparent"
          )}
        >
          <Button variant="ghost" size="icon">
            <Search />
          </Button>
          <TruthyRenderer value={state === "expanded"}>
            <Input
              className="border-none pl-0 outline-none shadow-none focus-visible:ring-0"
              placeholder="Search"
            />
          </TruthyRenderer>
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
