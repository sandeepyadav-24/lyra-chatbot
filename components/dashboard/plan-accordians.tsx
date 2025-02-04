"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import useStateStore from "@/store/state-store";
import { PlansResponseType, useGetPlans } from "@/api-service/plans";
import { useMemo, useEffect } from "react";
import PlanAccordianLoader from "../loader/plan-accordian-loader";
import ErrorComponent from "../error-component/error-component";
import { objectToBase64, base64ToObject } from "@/utils/helper_functions";

export default function PlanAccordians() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get("user_id");
  const isActive = searchParams.get("is_active") === "true";
  const activePlan = searchParams.get("plan")
    ? base64ToObject<PlansResponseType["plans"][0]>(searchParams.get("plan")!)
    : null;

  const { setRightSidebarOpen } = useStateStore();
  const { data: plansData, isLoading: plansLoading } = useGetPlans(
    userId!,
    isActive
  );

  const plans = useMemo(() => plansData?.plans, [plansData?.plans]);

  useEffect(() => {
    if (plans) {
      router.push(
        `/dashboard?${searchParams.toString()}&plan=${objectToBase64(plans[0])}`
      );
    }
  }, [plans]);

  if (plansLoading) return <PlanAccordianLoader />;

  if (!!(plansData as unknown as { errorCode: string })?.errorCode)
    return (
      <ErrorComponent
        error={(plansData as unknown as { message: string })?.message}
      />
    );

  return (
    <div className="flex flex-col gap-2">
      {plans?.map((plan) => (
        <div
          onClick={() => {
            router.push(
              `/dashboard?${searchParams.toString()}&plan=${objectToBase64(
                plan
              )}`
            );
            setRightSidebarOpen(true);
          }}
          className={cn(
            "flex flex-col gap-2 border border-app-primaryBorder rounded-lg p-2 cursor-pointer",
            plan.id === activePlan?.id && "bg-app-buttonActive"
          )}
        >
          <header className="flex items-center justify-between ">
            <p className="text-app-textPrimary font-semibold">
              {plan.plan_name}
            </p>
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-all duration-300 rotate-90",
                "rotate-0"
              )}
            />
          </header>
          <p
            className={cn(
              "text-app-textSecondary",
              plan.id === activePlan?.id && "text-app-textPrimary"
            )}
          >
            {plan.description}
          </p>
        </div>
      ))}
    </div>
  );
}
