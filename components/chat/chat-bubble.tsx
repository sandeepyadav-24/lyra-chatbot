import { Radius, User } from "lucide-react";
type ChatBubbleProps = {
  message: string;
  messageType: "user" | "assistant";
};
const ChatBubble = ({ message, messageType }: ChatBubbleProps) => {
  if (messageType === "user") {
    return (
      <div className="flex justify-end">
        <div className="flex items-start gap-2 max-w-[600px] w-full min-w-[250px]">
          <div className="p-2 flex-1 bg-app-chatBg border border-app-primaryBorder rounded-md">
            {message}
          </div>
          <div className="pt-2">
            <User size={24} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-2 ">
      <div className="pt-2">
        <Radius size={24} />
      </div>
      <div className="p-2 flex-1">{message}</div>
    </div>
  );
};

export default ChatBubble;
