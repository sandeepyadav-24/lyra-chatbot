import { useQuery } from "@tanstack/react-query";

// Define types for user chats response
export type UserChatsResponseType = {
  chats: {
    id: string;
    user_id: string;
    status: string;
    created_at: string;
    updated_at: string;
  }[];
};

// Function to fetch user chats
export const getUserChats = async (userId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/chats?user_id=${userId}`,
      { method: "GET" }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("getUserChats data:", data); // Log the data
    return data as UserChatsResponseType;
  } catch (error: any) {
    console.error("Error in getUserChats:", error);
    throw error;
  }
};

// React Query Hook to fetch user chats
export const useGetUserChats = (userId: string) => {
  return useQuery({
    queryKey: ["chats", userId],
    queryFn: () => getUserChats(userId),
    enabled: !!userId,
  });
};

// Define types for chat messages response
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

// Function to fetch chat messages
export const getChatMessages = async (chatId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/chats/${chatId}/messages`,
      { method: "GET" }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as ChatsMessageResponseType;
  } catch (error: any) {
    console.error("Error in getChatMessages:", error);
    throw error;
  }
};

// React Query Hook to fetch chat messages
export const useGetChatMessages = (chatId: string) => {
  return useQuery({
    queryKey: ["chats", chatId, "messages"],
    queryFn: () => getChatMessages(chatId),
    enabled: !!chatId,
  });
};

// Function to fetch user chats, extract the first chat ID, fetch its messages, and log them
export const fetchAndLogChatMessages = async (userId: string) => {
  try {
    // Step 1: Fetch user chats
    const userChats = await getUserChats(userId);
    
    if (!userChats?.chats?.length) {
      console.log("No chats found for this user.");
      return;
    }

    // Step 2: Extract the first chat ID
    const chatId = userChats.chats[0].id;
    console.log("Using chat ID:", chatId);

    // Step 3: Fetch chat messages for the extracted chat ID
    const chatMessages = await getChatMessages(chatId);

    // Step 4: Log the messages response
    console.log("Chat Messages Response:", chatMessages);
    
    return chatMessages;
  } catch (error) {
    console.error("Error in fetchAndLogChatMessages:", error);
  }
};
