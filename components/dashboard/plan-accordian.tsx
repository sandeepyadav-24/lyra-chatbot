"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import TruthyRenderer from "../truthy-renderer";
import { cn } from "@/lib/utils";

type PlanAccordianProps = {
  title: string;
  description: string;
};
export default function PlanAccordian({
  title,
  description,
}: PlanAccordianProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2 border border-app-primaryBorder rounded-lg p-2">
      <header
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-app-textPrimary font-semibold">{title}</p>
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-all duration-300 rotate-90",
            isOpen && "rotate-0"
          )}
        />
      </header>
      <TruthyRenderer value={isOpen}>
        <p className="text-app-textSecondary">{description}</p>
      </TruthyRenderer>
    </div>
  );
}
