export default function PlanAccordianLoader() {
  return (
    <div className="flex flex-col gap-2 border border-app-primaryBorder rounded-lg p-2">
      <header className="flex items-center justify-between">
        <div className="h-6 w-32 bg-app-planLoader rounded animate-pulse" />
        <div className="w-4 h-4 bg-app-planLoader rounded animate-pulse" />
      </header>
      <div className="h-16 w-full bg-app-planLoader rounded animate-pulse" />
    </div>
  );
}
