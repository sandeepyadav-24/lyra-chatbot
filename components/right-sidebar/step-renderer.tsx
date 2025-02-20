import { useSearchParams } from "next/navigation";
import { useCreatePlan, useGetPlanSteps } from "@/api-service/plans";
import PlanStepsLoader from "../loader/plan-steps-loader";
import { FilePlus, Landmark, ListChecks,PenTool } from "lucide-react";
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
  const { data: stepsData, isLoading: stepsLoading } = useGetPlanSteps(activePlan?.id!);
  const { mutate: createPlan } = useCreatePlan();
  const steps = useMemo(() => stepsData?.steps, [stepsData?.steps]);

  useEffect(() => {
    if (playPlan) {
      createPlan({
        steps: steps?.map((item) => ({
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
    return <ErrorComponent error={(stepsData as unknown as { message: string })?.message} />;
  }

  const planRuns = [
    { id: 1, description: "Provide your data file", icon: <FilePlus size={40} /> },
    { id: 2, description: "Load the data and display the first few rows", icon: <PenTool size={40} /> },
    { id: 3, description: "Specify the column containing the similarity search data", icon: <PenTool size={40} /> },
    { id: 4, description: "Parse the specified column as a datetime object and set it as the index", icon: <PenTool size={40} /> },
    { id: 5, description: "Plot the cost series data to visualize it", icon: <PenTool /> },
    { id: 6, description: "Specify any preprocessing steps needed (e.g., handling missing values, resampling)", icon: <PenTool size={40} /> },
  ];

  return (
    <div className="flex flex-col gap-4 p-6 bg-black text-white rounded-lg">
      <h2 className="text-lg font-bold">Similarity Search Analysis Plan</h2>
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Provide your data file <FilePlus size={20} />
      </button>
      <div className="flex flex-col gap-4 mt-4">
        {planRuns.map((run) => (
          <div key={run.id} className="flex items-center gap-2 p-3 border  rounded-lg">
            {run.icon}
            <p>{run.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
