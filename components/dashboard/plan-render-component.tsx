"use client";

import { cn } from "@/lib/utils";
import { FileMinus, FilePlus, LucideIcon, Play } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import TruthyRenderer from "../truthy-renderer";
import useStateStore from "@/store/state-store";

type PlanRenderComponentProps = {
  header: {
    icon: LucideIcon;
    title: string;
  };
  searchCard: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
};

export default function PlanRenderComponent({
  header,
  searchCard,
}: PlanRenderComponentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activePlan = searchParams.get("active-plan");
  const { setRightSidebarOpen } = useStateStore();

  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex items-center gap-2">
        <header.icon />
        <h1>{header.title}</h1>
      </div>
      <div className="flex gap-4 max-[680px]:flex-col">
        {searchCard?.map((card, index) => {
          const isActivePlan = activePlan === card.title;
          return (
            <div
              key={index}
              className={cn(
                "flex-1 flex flex-col items-center gap-2 border border-app-primaryBorder rounded-lg p-4",
                isActivePlan && "bg-app-buttonActive"
              )}
            >
              <div className="w-full flex items-center gap-2">
                <card.icon className="w-7 h-7" />
                <div className="flex items-center gap-2 ml-auto">
                  <TruthyRenderer value={!isActivePlan}>
                    <button
                      onClick={() => {
                        router.push(`/dashboard?active-plan=${card.title}`);
                        setRightSidebarOpen(true);
                      }}
                      className="flex items-center gap-2 bg-app-buttonActive rounded-full px-2 py-1"
                    >
                      <Play className="w-4 h-4" />
                      <p>Run</p>
                    </button>
                  </TruthyRenderer>
                  <TruthyRenderer value={isActivePlan}>
                    <FileMinus className="w-8 h-8 " />
                  </TruthyRenderer>
                  <TruthyRenderer value={!isActivePlan}>
                    <FilePlus className="w-8 h-8 " />
                  </TruthyRenderer>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="text-app-textPrimary font-semibold">
                  {card.title}
                </p>
                <p
                  className={cn(
                    "text-app-textSecondary",
                    isActivePlan && "text-app-textPrimary"
                  )}
                >
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
