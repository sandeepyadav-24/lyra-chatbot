import React from "react"
import { cn } from "@/lib/utils"

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal" | "both"
  className?: string
  viewportClassName?: string
  children: React.ReactNode
}

export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ orientation = "vertical", className, viewportClassName, children, ...props }, ref) => {
    const overflowStyle =
      orientation === "vertical"
        ? "overflow-y-auto overflow-x-hidden"
        : orientation === "horizontal"
          ? "overflow-x-auto overflow-y-hidden"
          : "overflow-auto"

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <div className={cn("h-full w-full ", overflowStyle, viewportClassName)}>{children}</div>
      </div>
    )
  },
)

ScrollArea.displayName = "ScrollArea"

export default ScrollArea

