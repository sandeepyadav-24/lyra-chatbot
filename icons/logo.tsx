"use client";

import { useTheme } from "next-themes";
import DarkLogo from "@/icons/svg/logo/logo-dark.svg";
import LightLogo from "@/icons/svg/logo/logo-light.svg";
import { useLayoutEffect, useRef } from "react";

export function CompanyLogo() {
  const { theme } = useTheme();
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (imageRef.current) {
      imageRef.current.src = theme === "dark" ? DarkLogo?.src : LightLogo?.src;
    }
  }, [theme]);

  return (
    <img
      ref={imageRef}
      src={theme === "dark" ? DarkLogo?.src : LightLogo?.src}
      alt="logo"
      width={30}
      height={35}
    />
  );
}
