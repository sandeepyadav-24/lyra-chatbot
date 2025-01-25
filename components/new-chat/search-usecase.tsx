import { Search } from "lucide-react";

export default function SearchUsecase() {
  return (
    <div className="flex items-center gap-2 border border-app-primaryBorder rounded-full px-2 py-1">
      <Search />
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
}
