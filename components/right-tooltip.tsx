import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useStateStore from "@/store/state-store";

export default function RightTooltip({
  children,
  tooltip,
}: {
  children: React.ReactNode;
  tooltip: string;
}) {
  const { leftSidebarOpen } = useStateStore();
  return (
    <TooltipProvider>
      <Tooltip delayDuration={1}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className="bg-app-universal text-app-reverseUniversal"
          side="right"
          sideOffset={12}
          hidden={leftSidebarOpen}
        >
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
