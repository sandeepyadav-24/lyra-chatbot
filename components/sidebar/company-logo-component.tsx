import { SidebarHeader, useSidebar } from "../ui/sidebar";
import TruthyRenderer from "../truthy-renderer";
import { cn } from "@/lib/utils";
import { CompanyLogo } from "@/icons/logo";
import Link from "next/link";
import { AppConstants } from "@/constants/constants";

export default function CompanyLogoComponent() {
  const { state } = useSidebar();
  return (
    <SidebarHeader className="flex flex-row items-center gap-2 pt-4">
      <Link
        href="/"
        className={cn("shrink-0", state === "collapsed" ? "p-0" : "p-2")}
      >
        <CompanyLogo />
      </Link>
      <TruthyRenderer value={state === "expanded"}>
        <h2 className="text-2xl font-bold ">{AppConstants.COMPANY_NAME}</h2>
      </TruthyRenderer>
    </SidebarHeader>
  );
}
