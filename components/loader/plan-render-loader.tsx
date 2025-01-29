export default function PlanRenderLoader() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-app-planLoader animate-pulse" />
        <div className="h-6 w-32 bg-app-planLoader rounded animate-pulse" />
      </div>
      <div className="flex gap-4 max-[680px]:flex-col">
        {[1, 2].map((_, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center gap-2 border border-app-primaryBorder rounded-lg p-4"
          >
            <div className="w-full flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-app-planLoader animate-pulse" />
              <div className="flex items-center gap-2 ml-auto">
                <div className="w-20 h-8 rounded-full bg-app-planLoader animate-pulse" />
                <div className="w-8 h-8 rounded bg-app-planLoader animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="h-6 w-48 bg-app-planLoader rounded animate-pulse" />
              <div className="h-16 w-full bg-app-planLoader rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
