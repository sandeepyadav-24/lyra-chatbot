import { useSessionContext } from "@/provider/session-context";
import { PenTool, CirclePlay, CirclePause, Map } from "lucide-react";
import { useMemo, useState, useEffect } from "react";

// Define the Step interface for type safety
interface Step {
  step_name: string;
  step_details: string;
}

export default function StepRenderer() {
  // Access flow from session context
  const { flow } = useSessionContext();

  // State for controlling play/pause and current step
  const [playPlan, setPlayPlan] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number | null>(null);

  // Memoize the steps array based on the flow value
  const steps = useMemo<Step[]>(() => {
    if (flow === "Known Flow") {
      return [
        { step_name: "Provide your data file", step_details: "" },
        { step_name: "Load the data and display the first few rows", step_details: "" },
        { step_name: "Specify the column containing the similarity search data", step_details: "" },
        { step_name: "Parse the specified column as a datetime object and set it as the index", step_details: "" },
        { step_name: "Plot the cost series data to visualize it", step_details: "" },
        { step_name: "Specify any preprocessing steps needed (e.g., handling missing values, resampling)", step_details: "" },
      ];
    }
    return [];
  }, [flow]);

  // Toggle play/pause state
  const handlePlayPause = () => {
    setPlayPlan((prev) => !prev);
  };

  // Effect to manage the highlighting loop
  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (playPlan && steps.length > 0) {
      setCurrentStepIndex(0); // Start with the first step
      intervalId = setInterval(() => {
        setCurrentStepIndex((prevIndex) => {
          if (prevIndex === null) return 0;
          return (prevIndex + 1) % steps.length; // Loop back to start
        });
      }, 5000); // Move to next step every 5 seconds
    } else {
      setCurrentStepIndex(null); // Clear highlight when paused
    }

    // Cleanup interval on unmount or change
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [playPlan, steps.length]);

  return (
    <div className="flex flex-col gap-4">
      {/* Play/Pause Button */}
      <button
        onClick={handlePlayPause}
        className={`flex items-center gap-2 px-4 py-2 text-white rounded-lg ${
          playPlan ? "" : ""
        }`}
      >
        {playPlan ? <CirclePause size={24} /> : <CirclePlay size={24} />}
        {playPlan ? "Pause" : "Play"}
      </button>

      {/* Steps List */}
      <div className="flex flex-col gap-4">
        {steps.map((item, index) => (
          <div
            key={item.step_name}
            className={`flex items-center gap-2 w-full rounded-lg p-3 `}
          >
               <div className="w-5 h-5">
            {index === currentStepIndex ? (
              <Map size={24} />
            ) : (
              <span style={{ transform: "rotate(90deg)", display: "inline-block",margin:"-15px" }}>
                <PenTool style={{ height: "30px", width: "30px" }} />
              </span>
            )}
          </div>
            <button className={`flex outline-none gap-2 text-left border border-app-primaryBorder justify-between rounded-lg p-3 flex-1 hover:bg-app-buttonActive cursor-pointer focus:outline-app-buttonActive ${
              index === currentStepIndex ? "bg-green-500" : " "
            }`}>
              <div className="flex flex-col gap-2">
                <p>{item.step_name}</p>
                {item.step_details && <p>{item.step_details}</p>}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}