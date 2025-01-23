import { useCheckHealth } from "@/api-service/check-health";

export default function SystemIsOnline() {
  const { data, error, isLoading } = useCheckHealth();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const isOnline = data?.status === "healthy";

  return (
    <p className="flex flex-row items-center gap-2 text-xs w-full truncate">
      <span className="text-red-500">{isOnline ? "🟢" : "🔴"}</span>
      {isOnline ? "System is online" : "System is offline"}
    </p>
  );
}
