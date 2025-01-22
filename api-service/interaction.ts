import { useMutation } from "@tanstack/react-query";

export type InteractionPayload = {
  session_id: string;
  input: string;
  mode: "interactive" | "non-interactive";
  plan_id: string;
};

export type InteractionResponse = {
  status: "success" | "error";
  session_id: string;
  mode: "interactive" | "non-interactive";
  response: {
    message: string;
    reply: string;
  };
  next_action: null | string;
};

export const interaction = async (payload: InteractionPayload) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/autokab/process`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  const data = await response.json();
  return data as InteractionResponse;
};

export const useInteraction = () => {
  return useMutation({
    mutationFn: (payload: InteractionPayload) => interaction(payload),
  });
};
