import { useMutation, useQuery } from "@tanstack/react-query";

export type ToolsResponseType = {
  tools: {
    id: string;
    name: string;
    description: string;
    category: string;
    metadata: {
      type: string;
    };
    created_at: string;
    updated_at: string;
  }[];
};

export const getTools = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tools`, {
    method: "GET",
  });
  const data = await response.json();
  return data as ToolsResponseType;
};

export const useGetTools = () => {
  return useQuery({
    queryKey: ["tools"],
    queryFn: () => getTools(),
  });
};

export type ToolsPayloadType = {
  name: "string";
  description: "string";
  category: "string";
  metadata: {};
};

export type SaveToolResponseType = {
  id: string;
  name: string;
  description: string;
  category: string;
  metadata: {};
  created_at: string;
  updated_at: string;
};

export const saveTool = async (payload: ToolsPayloadType) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tools`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data as SaveToolResponseType;
};

export const useSaveTool = () => {
  return useMutation({
    mutationFn: (payload: ToolsPayloadType) => saveTool(payload),
  });
};
