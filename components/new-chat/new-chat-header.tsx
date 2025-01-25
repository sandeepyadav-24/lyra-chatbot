import SearchUsecase from "./search-usecase";

export default function NewChatHeader() {
  return (
    <header className="flex justify-between items-start w-full p-4">
      <p className="font-semibold">Advance Reasoning</p>
      <div className="flex flex-col items-center gap-2">
        <SearchUsecase />
        <p className="text-sm text-app-textHover">Or start from below Plan</p>
      </div>
    </header>
  );
}
