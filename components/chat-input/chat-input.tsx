"use client";

import { ArrowUp } from "lucide-react";
import FileUploadDropdown from "./file-upload-dropdown";
import useStateStore from "@/store/state-store";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useSendChatMessage } from "@/api-service/chats";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ChatMessage {
  message: string;
  messageType: "user" | "assistant";
}

type ChatInputProps = {
  placeholder?: string;
};

export default function ChatInput({
  placeholder = "What is your next question?",
}: ChatInputProps) {
  const router = useRouter();
  const { leftSidebarOpen, rightSidebarOpen, chatMessages, setChatMessages } =
    useStateStore() as {
      leftSidebarOpen: boolean;
      rightSidebarOpen: boolean;
      chatMessages: ChatMessage[];
      setChatMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
    };
  const [message, setMessage] = useState("");
  const { mutate: sendMessage } = useSendChatMessage();

  const handleSubmit = () => {
    if (message.trim() === "") return;

    const session_id = localStorage.getItem("sessionId");
    if (!session_id) {
      console.error("No session ID found");
      return;
    }

    const userMessage = {
      message: message.trim(),
      messageType: "user" as const,
    };

    setChatMessages([...chatMessages, userMessage]);

    sendMessage(
      {
        message: message.trim(),
        session_id,
        context: {},
      },
      {
        onSuccess: (response) => {
          response.responses.forEach((resp) => {
            const assistantMessage = {
              message: resp.content,
              messageType: "assistant" as const,
            };
            setChatMessages((prev) => [...prev, assistantMessage]);
          });
        },
        onError: (error) => {
          console.error("Failed to send message:", error);
        },
      }
    );
    setMessage("");
  };

  return (
    <div className="flex flex-row items-center gap-2 w-full">
      {/* Chat Input Box*/}
      <div
        className={cn(
          "w-[730px] max-[855px]:w-full bg-app-inputBg mx-auto rounded-full flex items-center gap-3 p-3 shadow",
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
        <button
          onClick={handleSubmit}
          className="bg-transparent p-2 border border-app-border rounded-full hover:text-app-textHover hover:border-app-textHover"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      {/* Outcome Button - Positioned Below the Input*/}
      <Button
        variant="outline"
        className="mt-2 flex items-center gap-2 px-4 py-2 rounded-md text-sm bg-gray-200 hover:bg-gray-300 shadow-md"
        onClick={() => router.push("/dashboard/outcome")}
      >
        <span className="text-black">Outcome</span>
      </Button>
    </div>
  );
}
