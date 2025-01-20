import { motion } from "framer-motion";
import TruthyRenderer from "../truthy-renderer";
import useStateStore from "@/store/state-store";
import { Button } from "../ui/button";
import { LucideIcon, PanelRightClose } from "lucide-react";
import { useIsScreen } from "@/hooks/useIsScreen";
import { cn } from "@/lib/utils";
import { AppConstants } from "@/constants/constants";

type RightSidebarRootProps = {
  children: React.ReactNode;
};

export function RightSidebarRoot({ children }: RightSidebarRootProps) {
  const { rightSidebarOpen, toggleRightSidebar, setRightSidebarOpen } =
    useStateStore();
  const { fixedRightSidebar } = useIsScreen();
  return (
    <>
      <motion.div
        className={cn(
          "h-[100dvh] relative pl-1 bg-app-primary",
          fixedRightSidebar && "fixed top-0 right-0 z-10"
        )}
        style={{
          width: rightSidebarOpen ? "368px" : "0px",
        }}
        animate={{ width: rightSidebarOpen ? "368px" : "0px" }}
        transition={{ duration: 0.3 }}
        initial={{ width: rightSidebarOpen ? "368px" : "0px" }}
        layout
        layoutId="right-sidebar"
      >
        <TruthyRenderer value={fixedRightSidebar && rightSidebarOpen}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setRightSidebarOpen(false)}
            className="absolute top-2 left-2 z-10"
          >
            <PanelRightClose className="w-4 h-4" />
          </Button>
        </TruthyRenderer>
        <TruthyRenderer value={rightSidebarOpen}>
          <div
            title="Close Sidebar"
            className="absolute top-0 left-0 w-[2px] h-full hover:cursor-e-resize bg-app-secondary hover:bg-app-secondary/50"
            onClick={() => {
              toggleRightSidebar();
            }}
          />
        </TruthyRenderer>
        <TruthyRenderer value={rightSidebarOpen}>{children}</TruthyRenderer>
      </motion.div>
      <TruthyRenderer value={fixedRightSidebar && rightSidebarOpen}>
        <div
          onClick={() => {
            setRightSidebarOpen(false);
          }}
          className={cn(
            "fixed top-0 right-0 z-[9] w-full h-full",
            AppConstants.GLASSMORPHISM_PROPERTY
          )}
        />
      </TruthyRenderer>
    </>
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
