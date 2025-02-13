import { useSearchParams } from "next/navigation";
import { useCreatePlan, useGetPlanSteps } from "@/api-service/plans";
import PlanStepsLoader from "../loader/plan-steps-loader";
import { Dot, FilePlus } from "lucide-react";
import ErrorComponent from "../error-component/error-component";
import { PlansResponseType } from "@/api-service/plans";
import { base64ToObject } from "@/utils/helper_functions";
import { useEffect, useMemo } from "react";

export default function StepRenderer() {
  const searchParams = useSearchParams();
  const activePlan = searchParams.get("plan")
    ? base64ToObject<PlansResponseType["plans"][0]>(searchParams.get("plan")!)
    : null;

  const playPlan = searchParams.get("play_plan") === "true";

  const { data: stepsData, isLoading: stepsLoading } = useGetPlanSteps(
    activePlan?.id!
  );

  const { mutate: createPlan } = useCreatePlan();
  const steps = useMemo(() => stepsData?.steps, [stepsData?.steps]);

  useEffect(() => {
    if (playPlan) {
      createPlan({
        steps:
          steps?.map((item) => ({
            dependencies: item.dependencies,
            is_critical: item.is_critical,
            step_details: item.step_details,
            step_name: item.step_name,
            step_order: item.step_order,
            step_type: item.step_type,
            tool_id: "",
          })) || [],
        description: activePlan?.description!,
        is_known_flow: false,
        is_usecase: activePlan?.is_usecase!,
        plan_name: activePlan?.plan_name!,
        user_id: activePlan?.user_id!,
        plan_type: "usecase",
      });
    }
  }, [playPlan]);

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

  const planRuns = [
    {
      id: 1,
      description: "Parse the specified column as a datetime object...",
    },
    {
      id: 2,
      description:
        "Parse the specified column as a datetime object and set it as the index",
    },
    {
      id: 3,
      description:
        "Parse the specified column as a datetime object and set it as the index",
    },
    {
      id: 4,
      description:
        "Parse the specified column as a datetime object and set it as the index",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <p className="truncate">{activePlan?.plan_name}</p>
      <div className="flex flex-col gap-4">
        {steps?.map((item) => (
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
      <div className="mt-8">
        <h3 className="text-base font-bold mb-4">All Plans Runs</h3>
        <div className="flex flex-col gap-4">
          {planRuns.map((run) => (
            <div key={run.id} className="flex items-center gap-2 w-full">
              <div className="w-5 h-5">
                <Dot size={24} />
              </div>
              <div className="flex flex-col gap-2 p-3 border border-app-primaryBorder rounded-lg flex-1">
                <p className="font-semibold">Latest Plan Run</p>
                <p>{run.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
