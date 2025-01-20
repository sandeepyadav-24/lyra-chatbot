import { cn } from "@/lib/utils";
import useStateStore from "@/store/state-store";
import { motion } from "framer-motion";
import { useIsScreen } from "@/hooks/useIsScreen";
import TruthyRenderer from "../truthy-renderer";
import { AppConstants } from "@/constants/constants";
import { PanelLeftClose, PanelRightClose } from "lucide-react";
import { Button } from "../ui/button";

type LeftSidebarRootProps = {
  children: React.ReactNode;
};

function LeftSidebarRoot({ children }: LeftSidebarRootProps) {
  const { leftSidebarOpen, setLeftSidebarOpen } = useStateStore();
  const { fixedLeftSidebar } = useIsScreen();

  const isRender = !fixedLeftSidebar ? true : leftSidebarOpen;

  return (
    <>
      <motion.div
        className={cn(
          "relative h-[100dvh] border-r border-app-secondary",
          fixedLeftSidebar && "fixed top-0 left-0 z-10 bg-app-primary"
        )}
        style={{
          width: leftSidebarOpen ? "288px" : fixedLeftSidebar ? "0px" : "60px",
        }}
        animate={{
          width: leftSidebarOpen ? "288px" : fixedLeftSidebar ? "0px" : "60px",
        }}
        transition={{ duration: 0.3 }}
        initial={{
          width: leftSidebarOpen ? "288px" : fixedLeftSidebar ? "0px" : "60px",
        }}
        layout
        layoutId="left-sidebar"
      >
        <TruthyRenderer value={fixedLeftSidebar && leftSidebarOpen}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLeftSidebarOpen(false)}
            className="absolute top-2 right-2 z-10"
          >
            <PanelLeftClose className="w-4 h-4" />
          </Button>
        </TruthyRenderer>
        <TruthyRenderer value={isRender}>{children}</TruthyRenderer>
      </motion.div>
      <TruthyRenderer value={fixedLeftSidebar && leftSidebarOpen}>
        <div
          onClick={() => setLeftSidebarOpen(false)}
          className={cn(
            "fixed top-0 left-0 z-[9] h-screen w-full",
            AppConstants.GLASSMORPHISM_PROPERTY
          )}
        ></div>
      </TruthyRenderer>
    </>
  );
}

export { LeftSidebarRoot };
