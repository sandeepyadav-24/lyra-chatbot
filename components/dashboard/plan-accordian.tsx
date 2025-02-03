"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import useStateStore from "@/store/state-store";

type PlanAccordianProps = {
  title: string;
  description: string;
  planId: string;
};
export default function PlanAccordian({
  title,
  description,
  planId,
}: PlanAccordianProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setRightSidebarOpen } = useStateStore();
  return (
    <div
      onClick={() => {
        router.push(
          `/dashboard?${searchParams.toString()}&plan_id=${planId}&plan_name=${title}`
        );
        setRightSidebarOpen(true);
      }}
      className="flex flex-col gap-2 border border-app-primaryBorder rounded-lg p-2 cursor-pointer"
    >
      <header className="flex items-center justify-between ">
        <p className="text-app-textPrimary font-semibold">{title}</p>
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-all duration-300 rotate-90",
            "rotate-0"
          )}
        />
      </header>
      <p className="text-app-textSecondary">{description}</p>
    </div>
  );
}
