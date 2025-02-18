"use client";

import { ArrowUp } from "lucide-react";
import FileUploadDropdown from "./file-upload-dropdown";
import useStateStore from "@/store/state-store";
import { cn } from "@/lib/utils";
import { useState } from "react";
// Addded Post making
import { useSendChatMessage } from "@/api-service/chats"; // Add this import

// Add this interface at the top of the file, after the imports
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
  const { leftSidebarOpen, rightSidebarOpen, chatMessages, setChatMessages } =
    useStateStore() as {
      leftSidebarOpen: boolean;
      rightSidebarOpen: boolean;
      chatMessages: ChatMessage[];
      setChatMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
    };
  const [message, setMessage] = useState("");
  // Addde post api
  const { mutate: sendMessage } = useSendChatMessage();

  const handleSubmit = () => {
    if (message.trim() === "") return;

    // Get session_id from localStorage
    const session_id = localStorage.getItem("sessionId");
    console.log(session_id);

    if (!session_id) {
      console.error("No session ID found");
      return;
    }
    // Add user message
    const userMessage = {
      message: message.trim(),
      messageType: "user" as const,
    };
    // Directly set the new messages array
    setChatMessages([...chatMessages, userMessage]);

    sendMessage(
      {
        message: message.trim(),
        session_id, // Use the session_id from localStorage
        context: {},
      },
      {
        onSuccess: (response) => {
          // Add AI response to chat messages
          response.responses.forEach((resp) => {
            const assistantMessage = {
              message: resp.content,
              messageType: "assistant" as const,
            };
            // Update messages with assistant message
            setChatMessages((prev) => [...prev, assistantMessage]);
          });
        },
        onError: (error) => {
          console.error("Failed to send message:", error);
          // Optionally show an error message to the user
        },
      }
    );
    setMessage("");
  };

  return (
    <div
      className={cn(
        "w-[730px] max-[855px]:w-full bg-app-inputBg mx-auto rounded-full flex items-center gap-3 p-3 shadow  ",
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
        className="bg-transparent  p-2 border border-app-border rounded-full hover:text-app-textHover hover:border-app-textHover"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
