import { useQuery } from "@tanstack/react-query";

async function checkHealth() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/health`);
  const data = await response.json();
  return data;
}

export const useCheckHealth = () => {
  return useQuery({
    queryKey: ["check-health"],
    queryFn: checkHealth,
  });
};
