"use client";

import { createSession } from "@/api-service/create-session";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

type SessionType = {
  status: "success" | "error";
  session_id: string;
  mode: "interactive" | "non-interactive";
  response: {
    message: string;
  };
  next_action: null | string;
};

interface ContextType {
  session: SessionType | null;
  flow: string;
  setFlow: React.Dispatch<React.SetStateAction<string>>;
}


const SessionContext = createContext<ContextType | null>(null);

export default function SessionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();
  const [session, setSession] = useState<SessionType | null>(null);
  const [flow, setFlow] = useState<string>("Unknown Flow"); // State for "flow"
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

  const contextValue = { session, flow, setFlow }; // Provide both session and flow

  return (
    <SessionContext.Provider value={contextValue}> {/* Provide the combined value */}
      {loading ? <p>Loading...</p> : children}
      {error && <p>{error}</p>}
    </SessionContext.Provider>
  );
}


export const useSessionContext = () => {
  const context = useContext(SessionContext); // Get the whole context value

  if (!context) {
    throw new Error("useSessionContext must be used within a SessionContextProvider");
  }
  return context;  // Return the context value (session and flow)
};
