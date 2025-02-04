"use client";
import { Archive } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

export default function Header() {
  const searchParams = useSearchParams();
  const isActive = searchParams.get("is_active") === "true";
  const router = useRouter();
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-4 h-4"
          onChange={(e) => {
            const url = new URL(window.location.href);
            url.searchParams.set(
              "is_active",
              e.target.checked ? "true" : "false"
            );
            router.push(url.toString());
          }}
          defaultChecked={isActive}
        />
        <label className="hover:text-app-textHover cursor-pointer">
          Active Plan
        </label>
      </div>
      <button className="flex items-center gap-2 hover:text-app-textHover">
        <Archive />
        Archive
      </button>
    </header>
  );
}
