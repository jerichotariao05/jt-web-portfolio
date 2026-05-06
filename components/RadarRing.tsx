import * as React from "react";

import { cn } from "@/lib/utils";

type RadarRingVariant = "glow" | "outline";

export type RadarRingProps = {
  size: number;
  variant?: RadarRingVariant;
  className?: string;
};

export default function RadarRing({
  size,
  variant = "glow",
  className,
}: RadarRingProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2",
        variant === "glow" &&
          "border-accent/10 shadow-[0_0_80px_inset] shadow-accent/10",
        variant === "outline" && "border-accent/20",
        className,
      )}
      style={{ width: size, height: size }}
    />
  );
}
