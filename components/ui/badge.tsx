import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "tomato" | "marigold" | "herb" | "paper";
};

export function Badge({ className, variant = "paper", ...props }: BadgeProps) {
  return <span className={cn("uiBadge", `uiBadge-${variant}`, className)} {...props} />;
}
