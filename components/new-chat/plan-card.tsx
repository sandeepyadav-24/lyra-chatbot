import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type PlanCardProps = {
  Icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
  active?: boolean;
};

export default function PlanCard({
  Icon,
  title,
  description,
  onClick,
  active,
}: PlanCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col flex-1 min-w-[350px] cursor-pointer  gap-2 border border-app-primaryBorder rounded-lg p-4",
        active && "bg-app-buttonActive"
      )}
      onClick={onClick}
    >
      <Icon className="w-12 h-12" />
      <div className="flex flex-col gap-2">
        <p className="font-semibold">{title}</p>
        <p
          className={cn(
            "text-sm text-app-planDescription",
            active && "text-app-text"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
