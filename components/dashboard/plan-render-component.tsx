"use client";

import { cn } from "@/lib/utils";
import { PackageOpen, Play, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetUsecasePlans } from "@/api-service/plans";
import ErrorComponent from "../error-component/error-component";
import PlanRenderLoader from "../loader/plan-render-loader";
import { useEffect, useMemo } from "react";
import useStateStore from "@/store/state-store";

export default function PlanRenderComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get("user_id");
  const { data, isLoading } = useGetUsecasePlans();
  const plansData = useMemo(() => data?.plans, [data?.plans]);

  const { setRightSidebarOpen } = useStateStore();

  useEffect(() => {
    if (plansData) {
      const firstUserId = plansData[0]?.user_id;
      router.push(
        `/dashboard?${searchParams.toString()}&user_id=${firstUserId}`
      );
    }
  }, [plansData]);

  if (isLoading) return <PlanRenderLoader />;
  if ((data as unknown as { errorCode: string })?.errorCode)
    return (
      <ErrorComponent
        error={(data as unknown as { message: string })?.message}
      />
    );

  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex items-center gap-2">
        <PackageOpen />
        <h1>Usecase Plans ({data?.plan_count!})</h1>
      </div>
      <div className="flex gap-4 max-[680px]:flex-col">
        {plansData?.map((card, index) => {
          return (
            <div
              onClick={() => {
                router.push(
                  `/dashboard?${searchParams.toString()}&user_id=${
                    card?.user_id
                  }&play_plan=true`
                );
              }}
              key={index}
              className={cn(
                "flex-1 cursor-pointer flex flex-col items-center gap-2 border border-app-primaryBorder flex-wrap min-w-[250px] rounded-lg p-4",
                userId === card?.user_id && "bg-app-buttonActive"
              )}
            >
              <div className="w-full flex items-center gap-2">
                <Search className="w-7 h-7" />
                <div className="flex items-center gap-2 ml-auto">
                  <button
                    className={cn(
                      "flex items-center gap-2 border border-transparent bg-app-buttonActive rounded-full px-2 py-1",
                      userId === card?.user_id && " border-app-universal"
                    )}
                    onClick={() => {
                      setRightSidebarOpen(true);
                    }}
                  >
                    <Play className="w-4 h-4" />
                    <p>Run</p>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="text-app-textPrimary font-semibold">
                  {card?.plan_name}
                </p>
                <p
                  className={cn(
                    "text-app-textSecondary",
                    userId === card?.user_id && "text-app-textPrimary"
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
