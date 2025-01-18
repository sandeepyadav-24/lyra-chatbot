import { cn } from "@/lib/utils";
import useStateStore from "@/store/state-store";
import { motion } from "framer-motion";

function LeftSidebarRoot({ children }: { children: React.ReactNode }) {
  const { leftSidebarOpen } = useStateStore();
  return (
    <motion.div
      className={cn("relative  border-r border-app-secondary")}
      style={{
        width: leftSidebarOpen ? "288px" : "60px",
      }}
      animate={{ width: leftSidebarOpen ? "288px" : "60px" }}
      transition={{ duration: 0.3 }}
      initial={{ width: leftSidebarOpen ? "288px" : "60px" }}
      layout
      layoutId="left-sidebar"
    >
      {children}
    </motion.div>
  );
}

export { LeftSidebarRoot };
