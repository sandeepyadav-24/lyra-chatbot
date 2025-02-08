"use client";
import Breadcrumbs from "@/components/navbar/breadcrumbs";
import dynamic from "next/dynamic";

const AppSidebar = dynamic(
  () =>
    import("@/components/sidebar/app-sidebar").then((mod) => mod.AppSidebar),
  {
    ssr: false,
  }
);

const RightSidebar = dynamic(
  () =>
    import("@/components/right-sidebar/right-sidebar").then(
      (mod) => mod.RightSidebar
    ),
  {
    ssr: false,
  }
);

const AppNavbar = dynamic(
  () => import("@/components/navbar/app-navbar").then((mod) => mod.AppNavbar),
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
    <div className="bg-app-primary w-screen h-[100dvh] flex">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <AppNavbar />
        <div className="min-[800px]:hidden px-6 py-3">
          <Breadcrumbs />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 overflow-y-auto">
          {children}
        </div>
      </div>
      <RightSidebar />
    </div>
  );
}
