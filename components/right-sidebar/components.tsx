import { motion } from "framer-motion";
import TruthyRenderer from "../truthy-renderer";
import useStateStore from "@/store/state-store";
import { Button } from "../ui/button";
import { LucideIcon } from "lucide-react";

type RightSidebarRootProps = {
  children: React.ReactNode;
};

export function RightSidebarRoot({ children }: RightSidebarRootProps) {
  const { rightSidebarOpen, toggleRightSidebar } = useStateStore();
  return (
    <motion.div
      className="h-screen relative pl-1"
      style={{
        width: rightSidebarOpen ? "368px" : "0px",
      }}
      animate={{ width: rightSidebarOpen ? "368px" : "0px" }}
      transition={{ duration: 0.3 }}
      initial={{ width: rightSidebarOpen ? "368px" : "0px" }}
      layout
      layoutId="right-sidebar"
    >
      <TruthyRenderer value={rightSidebarOpen}>
        <div
          title="Close Sidebar"
          className="absolute top-0 left-0 w-[2px] h-full hover:cursor-e-resize bg-sidebar-accent hover:bg-sidebar-accent/50"
          onClick={() => {
            toggleRightSidebar();
          }}
        />
      </TruthyRenderer>
      <TruthyRenderer value={rightSidebarOpen}>{children}</TruthyRenderer>
    </motion.div>
  );
}

type ButtonComponentProps = {
  children: React.ReactNode;
  Icon: LucideIcon;
};
export function ButtonComponent({ children, Icon }: ButtonComponentProps) {
  return (
    <Button
      variant="ghost"
      className="w-full flex items-center justify-start gap-2 p-0 group hover:bg-transparent"
    >
      <Icon className="w-4 h-4 group-hover:text-app-textHover" />
      <p className="group-hover:text-app-textHover">{children}</p>
    </Button>
  );
}
