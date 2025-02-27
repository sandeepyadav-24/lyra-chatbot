import { Radius, User } from "lucide-react";
import { useEffect, useState } from "react";

type ChatBubbleProps = {
  message: string;
  messageType: "user" | "assistant";
};

const ChatBubble = ({ message, messageType }: ChatBubbleProps) => {
  const [displayedText, setDisplayedText] = useState("");

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
      }, 100); // Adjust speed for streaming effect

      return () => clearInterval(interval);
    } else {
      setDisplayedText(message); // Instantly show user messages
    }
  }, [message, messageType]);

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
          <img
            src="https://v3.fal.media/files/lion/BsFfyGeZvIOWAWPtupJKM.png" // Replace with actual image URL
            alt="3D Model Visualization"
            className="w-full h-auto rounded-md"
          />
        ) : (
          displayedText
        )}
      </div>

      
    </div>
  );
};

export default ChatBubble;
