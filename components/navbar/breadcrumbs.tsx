"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumbs = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  const generateBreadcrumbs = () => {
    const pathWithoutQuery = pathname.split("?")[0];

    const segments = pathWithoutQuery.split("/").filter((segment) => segment);

    const breadcrumbs = segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;
      const label = segment.charAt(0).toUpperCase() + segment.slice(1);

      return {
        href,
        label: label.replace(/-/g, " "),
      };
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`}>
      <Link
        href="/"
        className="flex items-center hover:text-app-primary transition-colors"
      >
        <Home size={16} />
      </Link>

      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.href} className="flex items-center">
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <Link
            href={breadcrumb.href}
            className={`hover:text-app-textSecondary transition-colors ${
              index === breadcrumbs.length - 1 ? "font-medium" : ""
            }`}
          >
            {breadcrumb.label}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
