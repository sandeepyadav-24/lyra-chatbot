"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import TruthyRenderer from "./truthy-renderer";

export function DarkModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <TruthyRenderer value={theme === "dark"}>
        <Moon className="w-4 h-4" />
      </TruthyRenderer>
      <TruthyRenderer value={theme === "light"}>
        <Sun className="w-4 h-4" />
      </TruthyRenderer>
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
    </div>
  );
}
