"use client";
import { useTheme } from "next-themes";
import DarkLogo from "@/icons/svg/logo/logo-dark.svg";
import LightLogo from "@/icons/svg/logo/logo-light.svg";
import Image from "next/image";

export function CompanyLogo() {
  const { theme } = useTheme();
  return (
    <Image
      src={theme === "dark" ? DarkLogo : LightLogo}
      alt="logo"
      width={30}
      height={35}
    />
  );
}
