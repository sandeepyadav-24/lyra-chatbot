"use client";

import {
  Database,
  SquareActivity,
  ChartColumnStacked,
  Search,
  FileText,
} from "lucide-react";
import PlanCard from "./plan-card";
import { useRouter, useSearchParams } from "next/navigation";
import useStateStore from "@/store/state-store";

const defaultPlans = [
  {
    icon: SquareActivity,
    title: "Quick Visualization",
    description: "Visually explore your data. Let the data speak for itself.",
  },
  {
    icon: Database,
    title: "Data Cleaner",
    description: "Methodically update your data from a CSV file.",
  },
  {
    icon: ChartColumnStacked,
    title: "A/B Testing",
    description:
      "Run significance test on your goals in a simulated environment.",
  },
  {
    icon: Search,
    title: "Similarity Search",
    description: "Search and build 3D models for understandig",
  },
  {
    icon: FileText,
    title: "Extract data from PDF",
    description: "Talk to your data by PDF converted into knowledge ",
  },
];

export default function DefaultPlans() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultPlan = searchParams.get("default-plan");
  const { setRightSidebarOpen } = useStateStore();
  return (
    <div className="flex flex-wrap gap-4">
      {defaultPlans.map((plan) => (
        <PlanCard
          key={plan.title}
          Icon={plan.icon}
          title={plan.title}
          description={plan.description}
          active={defaultPlan === plan.title}
          onClick={() => {
            setRightSidebarOpen(true);
            router.push(`/dashboard/new-chat?default-plan=${plan.title}`);
          }}
        />
      ))}
    </div>
  );
}
