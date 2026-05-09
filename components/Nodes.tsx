import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface NodeProps {
  title?: string;
  description?: string;
  width: number;
  height: number;
  icon?: React.ReactElement;
  image?: string;
  className?: string;
  onClick?: () => void;
}

export default function Nodes({
  title,
  width,
  height,
  icon,
  image,
  onClick,
  className,
}: NodeProps) {
  const hoverImageAlt = title?.trim() ? title : "Preview";

  const sizePx = Math.max(width, height);

  return (
    <div
      className={cn("group relative shrink-0 cursor-pointer", className)}
      style={{
        width,
        height,
      }}
      onClick={onClick}
    >
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full border border-ring/30 bg-sky-50 shadow-[0_0_10px_rgba(2,6,23,0.10),0_0_24px_rgba(2,6,23,0.06),inset_0_0_12px_rgba(56,189,248,0.10)] motion-safe:transition-[transform,border-color,box-shadow] motion-safe:duration-300 motion-reduce:transition-none motion-safe:group-hover:scale-105 group-hover:border-ring/70 group-hover:shadow-[inset_0_0_16px_color-mix(in_srgb,var(--ring)_45%,transparent),0_0_20px_color-mix(in_srgb,var(--ring)_22%,transparent)] dark:border-ring/40 dark:bg-[#05366F] dark:shadow-[0_0_10px_#05366F99,0_0_24px_#05366F4D,inset_0_0_12px_#05366F26] dark:group-hover:border-[#169BE9]/90 dark:group-hover:shadow-[inset_0_0_16px_color-mix(in_srgb,var(--ring)_60%,transparent),0_0_20px_color-mix(in_srgb,var(--ring)_35%,transparent)] motion-reduce:group-hover:scale-100">
      {icon ? (
        <span className="relative z-10 pointer-events-none">{icon}</span>
      ) : null}
      {image ? (
        <div className="absolute inset-0 z-20 opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100">
          <Image
            src={image}
            alt={hoverImageAlt}
            fill
            className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes={`${sizePx}px`}
            loading="eager"
          />
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/10 to-transparent dark:from-[#05254d]/20" />
        </div>
      ) : null}
      </div>
    </div>
  );
}
