import { useSearchParams } from "next/navigation";
import { useGetPlanSteps } from "@/api-service/plans";
import PlanStepsLoader from "../loader/plan-steps-loader";
import { Dot, FilePlus } from "lucide-react";
import ErrorComponent from "../error-component/error-component";

export default function StepRenderer() {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan_id");
  const planName = searchParams.get("plan_name");
  const { data: stepsData, isLoading: stepsLoading } = useGetPlanSteps(planId!);
  if (stepsLoading) {
    return <PlanStepsLoader />;
  }
  if ((stepsData as unknown as { errorCode: string })?.errorCode) {
    return (
      <ErrorComponent
        error={(stepsData as unknown as { message: string })?.message}
      />
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <p className="truncate">{planName}</p>
      <div className="flex flex-col gap-4">
        {stepsData?.steps?.map((item) => (
          <div key={item.id} className="flex items-center gap-2 w-full">
            <div className="w-5 h-5">
              <Dot size={24} />
            </div>
            <button className="flex outline-none gap-2 text-left border border-app-primaryBorder justify-between rounded-lg p-3 flex-1 hover:bg-app-buttonActive cursor-pointer focus:outline-app-buttonActive">
              <div className="flex flex-col gap-2">
                <p>{item.step_name}</p>
                <p>{item.step_details}</p>
              </div>
              <FilePlus size={24} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
