"use client";

import { cn } from "@/lib/utils";
import { FileMinus, FilePlus, LucideIcon, Play, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import TruthyRenderer from "../truthy-renderer";
import useStateStore from "@/store/state-store";
import { UsecasePlansResponseType } from "@/api-service/plans";

type PlanRenderComponentProps = {
  header: {
    icon: LucideIcon;
    title: string;
  };
  plans: UsecasePlansResponseType["plans"];
};

export default function PlanRenderComponent({
  header,
  plans,
}: PlanRenderComponentProps) {
  const router = useRouter();
  const { setRightSidebarOpen } = useStateStore();

  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex items-center gap-2">
        <header.icon />
        <h1>{header.title}</h1>
      </div>
      <div className="flex gap-4 max-[680px]:flex-col">
        {plans?.map((card, index) => {
          return (
            <div
              key={index}
              className={cn(
                "flex-1 flex flex-col items-center gap-2 border border-app-primaryBorder rounded-lg p-4",
                card?.is_active && "bg-app-buttonActive"
              )}
            >
              <div className="w-full flex items-center gap-2">
                <Search className="w-7 h-7" />
                <div className="flex items-center gap-2 ml-auto">
                  <TruthyRenderer value={!card?.is_active}>
                    <button
                      onClick={() => {
                        router.push(`/dashboard?plan-id=${card?.id}`);
                        setRightSidebarOpen(true);
                      }}
                      className="flex items-center gap-2 bg-app-buttonActive rounded-full px-2 py-1"
                    >
                      <Play className="w-4 h-4" />
                      <p>Run</p>
                    </button>
                  </TruthyRenderer>
                  <TruthyRenderer value={card?.is_active}>
                    <FileMinus className="w-8 h-8 " />
                  </TruthyRenderer>
                  <TruthyRenderer value={!card?.is_active}>
                    <FilePlus className="w-8 h-8 " />
                  </TruthyRenderer>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="text-app-textPrimary font-semibold">
                  {card?.plan_name}
                </p>
                <p
                  className={cn(
                    "text-app-textSecondary",
                    card?.is_active && "text-app-textPrimary"
                  )}
                >
                  {card?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
