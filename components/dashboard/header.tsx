import { SquareCheckBig, Archive } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <button className="flex items-center gap-2 hover:text-app-textHover">
        <SquareCheckBig />
        Active Plan
      </button>
      <button className="flex items-center gap-2 hover:text-app-textHover">
        <Archive />
        Archive
      </button>
    </header>
  );
}
