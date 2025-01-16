import { Session } from "next-auth";
import { SessionProviderWrapper } from "./session-provider";
import { ThemeProvider } from "./theme-provider";

export default function Provider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
    >
      <SessionProviderWrapper session={session}>
        {children}
      </SessionProviderWrapper>
    </ThemeProvider>
  );
}
