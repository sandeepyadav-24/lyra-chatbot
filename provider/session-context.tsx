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

  useEffect(() => {
    if (status === "authenticated") {
      createSession().then((session) => {
        setSession(session);
      });
    }
  }, [status]);

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSessionContext = () => {
  const session = useContext(SessionContext);

  return session;
};
