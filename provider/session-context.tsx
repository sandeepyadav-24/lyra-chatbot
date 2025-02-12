
"use client";

import { createSession } from "@/api-service/create-session";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

const SessionContext = createContext<SessionType | null>(null);

type SessionType = {
  status: "success" | "error";
  session_id: string;
  mode: "interactive" | "non-interactive";
  response: {
    message: string;
  };
  next_action: null | string;
};

export default function SessionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();
  const [session, setSession] = useState<SessionType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "authenticated") {
      setLoading(true);
      createSession()
        .then((session) => {
          setSession(session);
          setError(null);
        })
        .catch((error) => {
          console.error("Failed to create session:", error);
          setError("Failed to create session");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [status]);

  return (
    <SessionContext.Provider value={session}>
      {loading ? <p>Loading...</p> : children}
      {error && <p>{error}</p>}
    </SessionContext.Provider>
  );
}

export const useSessionContext = () => {
  const session = useContext(SessionContext);

  return session;
};
