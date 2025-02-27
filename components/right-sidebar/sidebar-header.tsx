import { ButtonComponent } from "./components";
import { NotebookText, CirclePlay, CirclePause } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
export function SidebarHeader() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const playPlan = searchParams.get("play_plan") === "true";
  return (
    <div className="w-full flex items-start justify-between">
      <div className="flex flex-col items-center gap-2">
        <ButtonComponent Icon={NotebookText}>Help</ButtonComponent>
        {playPlan ? (
          <ButtonComponent Icon={CirclePause}>Pause</ButtonComponent>
        ) : (
          <ButtonComponent Icon={CirclePlay}>Play</ButtonComponent>
        )}
      </div>

      <div className="flex items-center gap-2">
        <p className="truncate">Active Plan</p>
        <p className="truncate">1/10</p>
      </div>
    </div>
  );
}
