import { useQuery, useMutation } from "@tanstack/react-query";

export type ChatRequestType = {
  message: string;
  session_id: string;
  context: Record<string, any>;
};

export type ChatResponseType = {
  responses: {
    type: string;
    content: string;
  }[];
  session_id: string;
  context: {
    conversation_context: string;
    [key: string]: any;
  };
};

export const sendChatMessage = async (data: ChatRequestType) => {
  console.log("API URL:", `${process.env.NEXT_PUBLIC_API_URL}/chat`);
  console.log("Request data:", data);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.error("Response status:", response.status);
    console.error("Response statusText:", response.statusText);
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const responseData = await response.json();
  console.log(responseData);
  return responseData as ChatResponseType;
};

export const useSendChatMessage = () => {
  return useMutation({
    mutationFn: sendChatMessage,
  });
};

export type UserChatsResponseType = {
  chats: {
    id: string;
    user_id: string;
    status: string;
    created_at: string;
    updated_at: string;
  }[];
};

export const getUserChats = async (userId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/chats/${userId}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return data as UserChatsResponseType;
};

export const useGetUserChats = (userId: string) => {
  return useQuery({
    queryKey: ["chats", userId],
    queryFn: () => getUserChats(userId),
    enabled: !!userId,
  });
};

export type ChatsMessageResponseType = {
  messages: {
    id: string;
    chat_id: string;
    content: string;
    role: string;
    sequence_number: number;
    created_at: string;
  }[];
};

export const getChatMessages = async (chatId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/chats/${chatId}/messages`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return data as ChatsMessageResponseType;
};

export const useGetChatMessages = (chatId: string) => {
  return useQuery({
    queryKey: ["chats", chatId, "messages"],
    queryFn: () => getChatMessages(chatId),
    enabled: !!chatId,
  });
};
