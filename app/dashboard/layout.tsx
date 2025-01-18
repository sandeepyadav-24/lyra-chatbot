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
    <div className="bg-app-primary w-screen h-screen flex">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <AppNavbar />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </div>
      <RightSidebar />
    </div>
  );
}
