"use client";

import { useGetPlans } from "@/api-service/plans";
import PlanRenderLoader from "../loader/plan-render-loader";
import PlanRenderComponent from "./plan-render-component";
import { PackageOpen } from "lucide-react";

export default function UserPlans() {
  const { data, isLoading } = useGetPlans("system", false);
  if (isLoading) return <PlanRenderLoader />;
  return (
    <PlanRenderComponent
      header={{
        icon: PackageOpen,
        title: "User Plans",
      }}
      plans={data?.plans!}
    />
  );
}
