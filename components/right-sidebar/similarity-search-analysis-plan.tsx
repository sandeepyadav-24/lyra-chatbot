import { similaritySearchAnalysisPlanData } from "./constant-data";

export default function SimilaritySearchAnalysisPlan() {
  return (
    <div className="flex flex-col gap-4">
      <p className="truncate">Similarity Search Analysis Plan</p>
      <div className="flex flex-col gap-4">
        {similaritySearchAnalysisPlanData.map((item) => (
          <div key={item.id} className="flex items-center gap-2 w-full">
            <div className="w-5 h-5">
              {item.icon && <item.icon size={24} />}
            </div>
            <button className="flex outline-none gap-2 text-left border justify-between rounded-lg p-3 flex-1 hover:bg-app-buttonActive cursor-pointer focus:outline-app-buttonActive">
              <p>{item.data.title}</p>
              {item.data.icon && <item.data.icon size={24} />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
