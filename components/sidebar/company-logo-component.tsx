import TruthyRenderer from "../truthy-renderer";
import { cn } from "@/lib/utils";
import { CompanyLogo } from "@/icons/logo";
import Link from "next/link";
import { AppConstants } from "@/constants/constants";
import useStateStore from "@/store/state-store";

export default function CompanyLogoComponent() {
  const { leftSidebarOpen } = useStateStore();

  return (
    <div className="flex flex-row items-center gap-3 pt-4">
      <Link
        href="/"
        className={cn("shrink-0", leftSidebarOpen ? "pl-4" : "pl-4")}
      >
        <CompanyLogo />
      </Link>
      <TruthyRenderer value={leftSidebarOpen}>
        <h2 className="text-2xl font-bold ">{AppConstants.COMPANY_NAME}</h2>
      </TruthyRenderer>
    </div>
  );
}
