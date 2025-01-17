import AppNavbar from "@/components/navbar/app-navbar";

import dynamic from "next/dynamic";

const AppSidebar = dynamic(
  () =>
    import("@/components/sidebar/app-sidebar").then((mod) => mod.AppSidebar),
  {
    ssr: false,
  }
);

const SidebarProvider = dynamic(
  () => import("@/components/ui/sidebar").then((mod) => mod.SidebarProvider),
  {
    ssr: false,
  }
);

const SidebarInset = dynamic(
  () => import("@/components/ui/sidebar").then((mod) => mod.SidebarInset),
  {
    ssr: false,
  }
);

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppNavbar />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
