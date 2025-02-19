import AuthProvider from "./auth-provider";
import { QueryProvider } from "./query-provider";
import SessionContextProvider from "./session-context";
import { ThemeProvider } from "./theme-provider";
import { Session } from "next-auth";

export default function Provider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
    >
      <AuthProvider session={session}>
        <QueryProvider>
          <SessionContextProvider>{children}</SessionContextProvider>
        </QueryProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
