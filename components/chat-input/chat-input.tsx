"use client";

import { ArrowUp } from "lucide-react";
import FileUploadDropdown from "./file-upload-dropdown";
import useStateStore from "@/store/state-store";
import { cn } from "@/lib/utils";

type ChatInputProps = {
  placeholder?: string;
};

export default function ChatInput({
  placeholder = "What is your next question?",
}: ChatInputProps) {
  const { leftSidebarOpen, rightSidebarOpen } = useStateStore();
  return (
    <div
      className={cn(
        "w-[600px] max-[855px]:w-full bg-app-inputBg mx-auto rounded-full flex items-center gap-3 p-3 shadow",
        leftSidebarOpen && rightSidebarOpen
          ? "max-[1300px]:w-full"
          : "max-[855px]:w-full"
      )}
    >
      <FileUploadDropdown />
      <input
        type="text"
        className="bg-transparent border-none w-full outline-none text-base"
        placeholder={placeholder}
      />
      <button className="bg-transparent  p-2 border border-app-border rounded-full hover:text-app-textHover hover:border-app-textHover">
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
