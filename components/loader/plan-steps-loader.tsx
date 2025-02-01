export default function PlanStepsLoader() {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="w-5 h-5">
        <div className="w-6 h-6 rounded-full bg-app-primaryBorder animate-pulse" />
      </div>
      <div className="flex outline-none gap-2 text-left border border-app-primaryBorder justify-between rounded-lg p-3 flex-1">
        <div className="h-4 w-32 bg-app-primaryBorder rounded animate-pulse" />
        <div className="h-6 w-6 bg-app-primaryBorder rounded animate-pulse" />
      </div>
    </div>
  );
}
