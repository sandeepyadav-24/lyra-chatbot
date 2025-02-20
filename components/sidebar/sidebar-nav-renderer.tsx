import { ChevronRight, LucideIcon } from "lucide-react";
import TruthyRenderer from "../truthy-renderer";
import { useState } from "react";
import { cn } from "@/lib/utils";
import RightTooltip from "../right-tooltip";
import useStateStore from "@/store/state-store";

export type SidebarNavRendererItem = {
  title: string;
  url: string | null;
  icon: LucideIcon | null;
  isShowChevron: boolean;
  items: SidebarNavRendererItem[] | null;
};

type SidebarNavRendererProps = {
  data: SidebarNavRendererItem[];
};

export default function SidebarNavRenderer({ data }: SidebarNavRendererProps) {
  const { leftSidebarOpen } = useStateStore();
  const [isOpenNavMain, setIsOpenNavMain] = useState<string[] | null>(null);

  const handleClick = (item: SidebarNavRendererItem) => {
    if (item.url) {
      window.location.href = item.url; // Redirect if URL exists
      return;
    }
    
    const remaining = isOpenNavMain?.includes(item.title)
      ? isOpenNavMain.filter((t) => t !== item.title)
      : [...(isOpenNavMain || []), item.title];
    setIsOpenNavMain(remaining);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    item: SidebarNavRendererItem
  ) => {
    if (event.key === "Enter") {
      handleClick(item);
    }
  };

  return (
    <div className={"flex flex-col gap-3"}>
      {data.map((item) => (
        <div key={item.title} className="flex flex-col gap-2 items-end">
          <div
            tabIndex={0}
            onKeyDown={(event) => handleKeyDown(event, item)}
            className="flex flex-row w-full items-center gap-2 cursor-pointer hover:bg-app-secondary px-2 py-[6px] rounded-md"
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              handleClick(item);
            }}
          >
            {item.icon && (
              <RightTooltip tooltip={item.title}>
                <button
                  tabIndex={-1}
                  className={cn(
                    "border-none bg-transparent p-0 py-1",
                    !leftSidebarOpen ? "py-1" : "py-0"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                </button>
              </RightTooltip>
            )}
            <TruthyRenderer value={leftSidebarOpen}>
              <p className="text-sm text-app-textPrimary truncate">
                {item.title}
              </p>
            </TruthyRenderer>
            <TruthyRenderer value={item.isShowChevron && leftSidebarOpen}>
              <ChevronRight
                className={cn(
                  "ml-auto w-4 h-4 transition-transform duration-200 ",
                  isOpenNavMain?.includes(item.title) ? "rotate-90" : ""
                )}
              />
            </TruthyRenderer>
          </div>
          <TruthyRenderer
            value={!!isOpenNavMain?.includes(item.title) && leftSidebarOpen}
          >
            <TruthyRenderer value={!!item.items}>
              <div className="flex pl-3 flex-col gap-2 border-l border-app-primaryBorder w-[94%]">
                {item.items && <SidebarNavRenderer data={item.items} />}
              </div>
            </TruthyRenderer>
          </TruthyRenderer>
        </div>
      ))}
    </div>
  );
}
