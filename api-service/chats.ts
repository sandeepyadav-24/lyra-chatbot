import { useQuery } from "@tanstack/react-query";

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
