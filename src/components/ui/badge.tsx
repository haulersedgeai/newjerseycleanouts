import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
  variant = "default",
}: {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "brand" | "dark";
}) {
  const styles =
    variant === "brand"
      ? "bg-brand-50 text-brand-700 border-brand-200"
      : variant === "dark"
      ? "bg-ink-900 text-white border-ink-900"
      : "bg-white text-ink-700 border-ink-200";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        styles,
        className
      )}
    >
      {children}
    </span>
  );
}
