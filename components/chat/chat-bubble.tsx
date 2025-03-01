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

  // Log and set shouldResume for "Searching part database..." message
  if (message.includes("Searching part database...") && !hasLogged) {
    console.log("okkk");
    setHasLogged(true);
    if (!shouldResume) {
      setShouldResume(true); // Trigger resume when this message appears
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
        {message.includes("Displaying 3D model visualization") ? (
          // <img
          //   src="https://v3.fal.media/files/lion/BsFfyGeZvIOWAWPtupJKM.png"
          //   alt="3D Model Visualization"
          //   className="w-full h-auto rounded-md"
          // />

          <main className="flex flex-col items-center justify-center min-h-screen ">
          <h1 className="text-2xl font-bold mb-4">3D Model Viewer</h1>
          <GLTFModel modelPath="/assets/bolt.gltf" />
        </main>
        ) : (
          displayedText
        )}
      </div>
    </div>
  );
};

export default ChatBubble;