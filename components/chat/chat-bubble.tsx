"use client";

import { Radius, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useSessionContext } from "@/provider/session-context";
import GLTFModel from "../new-chat/GLTFModel";

type ChatBubbleProps = {
  message: string;
  messageType: "user" | "assistant";
};

const ChatBubble = ({ message, messageType }: ChatBubbleProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [hasLogged, setHasLogged] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(true); // New loading state
  const { flow, shouldResume, setShouldResume } = useSessionContext();

  useEffect(() => {
    if (messageType === "assistant") {
      let words = message.split(" ");
      let index = 0;

      const interval = setInterval(() => {
        if (index < words.length) {
          setDisplayedText(
            (prev) => prev + (index === 0 ? "" : " ") + words[index]
          );
          index++;
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    } else {
      setDisplayedText(message);
    }
  }, [message, messageType]);

  // Add loading delay for 3D model
  useEffect(() => {
    if (message.includes("Displaying side-by-side 3D comparison")) {
      setIsModelLoading(true);
      const timer = setTimeout(() => {
        setIsModelLoading(false);
      }, 2000); // 2-second delay (adjust as needed)

      return () => clearTimeout(timer);
    }
  }, [message]);

  // Log and set shouldResume for "Searching part database..." message
  if (message.includes("Searching part database...") && !hasLogged) {
    console.log("okkk");
    setHasLogged(true);
    if (!shouldResume) {
      setShouldResume(true);
    }
  }

  if (messageType === "user") {
    return (
      <div className="flex justify-end">
        <div className="flex items-start gap-2 max-w-[600px] w-full min-w-[250px]">
          <div className="p-2 flex-1 bg-app-chatBg border border-app-primaryBorder rounded-md">
            {displayedText}
          </div>
          <div className="pt-2">
            <User size={24} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-2">
      <div className="pt-2">
        <Radius size={24} />
      </div>
      <div className="p-2 flex-1">
        {message.includes("Displaying side-by-side 3D comparison") ? (
          isModelLoading ? (
            <div className="flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              <p>Loading 3D model...</p>
            </div>
          ) : (
            <main className="flex flex-col items-center justify-center min-h-screen">
              <GLTFModel modelPath="/assets/bolt.gltf" />
            </main>
          )
        ) : (
          displayedText
        )}
      </div>
    </div>
  );
};

export default ChatBubble;