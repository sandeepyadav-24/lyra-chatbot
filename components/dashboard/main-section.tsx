"use client";

import { useGetUsecasePlans } from "@/api-service/plans";
import PlanAccordian from "./plan-accordian";
import PlanRenderComponent from "./plan-render-component";
import { Database, PackageOpen, Search } from "lucide-react";
import PlanRenderLoader from "../loader/plan-render-loader";
import UserPlans from "./user-plans";
const searchUsecase = {
  header: {
    icon: PackageOpen,
    title: "Similarity Search Use Case",
  },
  searchCard: [
    {
      icon: Search,
      title: "Similarity Search Analysis Plan",
      description: "Search and build 3D models for understanding ...",
    },
    {
      icon: Search,
      title: "Similarity Search Plan 2",
      description:
        "This dive deeps into understanding your business data to evaluate its needs and execute clear objectives....",
    },
  ],
};

const sqlUsecase = {
  header: {
    icon: PackageOpen,
    title: "SQL Use Case",
  },
  searchCard: [
    {
      icon: Database,
      title: "SQL Use Case 1",
      description: "Methodically update your data from a CS....",
    },
    {
      icon: Database,
      title: "SQL Use Case 2",
      description: "Methodically update your data from a CS...",
    },
  ],
};

export default function MainSection() {
  const { data, isLoading } = useGetUsecasePlans();
  if (isLoading) return <PlanRenderLoader />;
  console.log(data);
  return (
    <section className="flex flex-col gap-2">
      <PlanRenderComponent
        header={{
          icon: PackageOpen,
          title: "Usecase Plans",
        }}
        plans={data?.plans!}
      />
      <PlanAccordian
        title="Plan: 1"
        description="Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list."
      />
      <PlanAccordian
        title="Plan: 3"
        description="The success of this plan lies in enhancing your business data."
      />
      <UserPlans />
    </section>
  );
}
