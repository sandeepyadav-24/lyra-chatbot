import { ChevronRight, LucideIcon } from "lucide-react";
import TruthyRenderer from "../truthy-renderer";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useSidebar } from "../ui/sidebar";
import RightTooltip from "../right-tooltip";

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
  const [isOpenNavMain, setIsOpenNavMain] = useState<string[] | null>(null);
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  return (
    <div className={"flex flex-col gap-3"}>
      {data.map((item) => (
        <div key={item.title} className="flex flex-col gap-2 items-end">
          <div
            className="flex flex-row w-full items-center gap-2 cursor-pointer hover:bg-sidebar-accent px-2 py-[6px] rounded-md"
            onClick={() =>
              setIsOpenNavMain(
                isOpenNavMain?.includes(item.title)
                  ? isOpenNavMain.filter((title) => title !== item.title)
                  : [...(isOpenNavMain || []), item.title]
              )
            }
          >
            {item.icon && (
              <RightTooltip tooltip={item.title}>
                <button
                  className={cn(
                    "border-none bg-transparent p-0 py-1",
                    isCollapsed ? "py-1" : "py-0"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                </button>
              </RightTooltip>
            )}
            <TruthyRenderer value={!isCollapsed}>
              <p className="text-sm truncate">{item.title}</p>
            </TruthyRenderer>
            <TruthyRenderer value={item.isShowChevron && !isCollapsed}>
              <ChevronRight
                className={cn(
                  "ml-auto w-4 h-4 transition-transform duration-200 ",
                  isOpenNavMain?.includes(item.title) ? "rotate-90" : ""
                )}
              />
            </TruthyRenderer>
          </div>
          <TruthyRenderer
            value={!!isOpenNavMain?.includes(item.title) && !isCollapsed}
          >
            <div className="flex pl-3 flex-col gap-2 border-l w-[94%]">
              <TruthyRenderer value={!!item.items}>
                {item.items && <SidebarNavRenderer data={item.items} />}
              </TruthyRenderer>
            </div>
          </TruthyRenderer>
        </div>
      ))}
    </div>
  );
}
