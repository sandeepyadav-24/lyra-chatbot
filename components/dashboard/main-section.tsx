"use client";

import { useGetPlans, useGetUsecasePlans } from "@/api-service/plans";
import PlanRenderComponent from "./plan-render-component";
import { PackageOpen } from "lucide-react";
import PlanRenderLoader from "../loader/plan-render-loader";
import ErrorComponent from "../error-component/error-component";
import { useSearchParams } from "next/navigation";
import TruthyRenderer from "../truthy-renderer";
import PlanAccordianLoader from "../loader/plan-accordian-loader";
import PlanAccordian from "./plan-accordian";

export default function MainSection() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("user_id");
  const { data, isLoading } = useGetUsecasePlans();
  const { data: plansData, isLoading: plansLoading } = useGetPlans(
    userId!,
    false
  );
  if (isLoading) return <PlanRenderLoader />;
  if ((data as unknown as { errorCode: string }).errorCode)
    return (
      <ErrorComponent
        error={(data as unknown as { message: string }).message}
      />
    );

  return (
    <section className="flex flex-col gap-2">
      <PlanRenderComponent
        header={{
          icon: PackageOpen,
          title: "Usecase Plans",
          planCount: data?.plan_count!,
        }}
        plans={data?.plans!}
      />

      <TruthyRenderer value={plansLoading}>
        <PlanAccordianLoader />
      </TruthyRenderer>

      <TruthyRenderer
        value={!!(plansData as unknown as { errorCode: string }).errorCode}
      >
        <ErrorComponent
          error={(plansData as unknown as { message: string }).message}
        />
      </TruthyRenderer>

      <TruthyRenderer value={!!plansData && plansData?.plans.length > 0}>
        {plansData?.plans.map((plan) => (
          <PlanAccordian
            key={plan.id}
            title={plan.plan_name}
            description={plan.description}
            planId={plan.id}
          />
        ))}
      </TruthyRenderer>
    </section>
  );
}
