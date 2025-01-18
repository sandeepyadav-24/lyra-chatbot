import React from "react";
import { Button } from "../ui/button";
import {
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightClose,
  PanelRightOpen,
} from "lucide-react";
import TruthyRenderer from "../truthy-renderer";

type SidebarToogleButtonProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isLeftSidebar?: boolean;
};

export default function SidebarToogleButton({
  isSidebarOpen,
  toggleSidebar,
  isLeftSidebar = false,
}: SidebarToogleButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      title={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      onClick={() => toggleSidebar()}
    >
      <TruthyRenderer value={isSidebarOpen}>
        {isLeftSidebar ? (
          <PanelLeftClose className="w-4 h-4" />
        ) : (
          <PanelRightClose className="w-4 h-4" />
        )}
      </TruthyRenderer>
      <TruthyRenderer value={!isSidebarOpen}>
        {isLeftSidebar ? (
          <PanelLeftOpen className="w-4 h-4" />
        ) : (
          <PanelRightOpen className="w-4 h-4" />
        )}
      </TruthyRenderer>
    </Button>
  );
}
