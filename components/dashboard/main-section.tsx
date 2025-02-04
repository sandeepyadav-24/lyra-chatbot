"use client";

import PlanRenderComponent from "./plan-render-component";
import PlanAccordians from "./plan-accordians";

export default function MainSection() {
  return (
    <section className="flex flex-col gap-2">
      <PlanRenderComponent />
      <PlanAccordians />
    </section>
  );
}
