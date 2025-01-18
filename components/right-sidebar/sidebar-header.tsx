import { ButtonComponent } from "./components";
import { NotebookText, CirclePlay } from "lucide-react";

export function SidebarHeader() {
  return (
    <div className="w-full flex items-start justify-between">
      <div className="flex flex-col items-center gap-2">
        <ButtonComponent Icon={NotebookText}>Help</ButtonComponent>
        <ButtonComponent Icon={CirclePlay}>Play</ButtonComponent>
      </div>
      <div className="flex items-center gap-2">
        <p className="truncate">Active Plan</p>
        <p className="truncate">1/10</p>
      </div>
    </div>
  );
}
