import Image from "next/image";
import React from "react";

interface NodeProps {
  title?: string;
  description?: string;
  width: number;
  height: number;
  icon?: React.ReactElement;
  image?: string;
  onClick?: () => void;
}

export default function Nodes({
  title,
  width,
  height,
  icon,
  image,
  onClick,
}: NodeProps) {
  const hoverImageAlt = title?.trim() ? title : "Preview";

  const sizePx = Math.max(width, height);

  return (
    <div
      className="group relative flex items-center justify-center overflow-hidden rounded-full border border-ring/30 bg-sky-50 shadow-[0_0_10px_rgba(2,6,23,0.10),0_0_24px_rgba(2,6,23,0.06),inset_0_0_12px_rgba(56,189,248,0.10)] transition-all duration-300 cursor-pointer hover:scale-105 hover:border-ring/70 hover:shadow-[inset_0_0_16px_color-mix(in_srgb,var(--ring)_45%,transparent),0_0_20px_color-mix(in_srgb,var(--ring)_22%,transparent)] dark:border-ring/40 dark:bg-[#05366F] dark:shadow-[0_0_10px_#05366F99,0_0_24px_#05366F4D,inset_0_0_12px_#05366F26] dark:hover:border-[#169BE9]/90 dark:hover:shadow-[inset_0_0_16px_color-mix(in_srgb,var(--ring)_60%,transparent),0_0_20px_color-mix(in_srgb,var(--ring)_35%,transparent)]"
      onClick={onClick}
      style={{
        width,
        height,
      }}
    >
      {icon ? (
        <span className="relative z-10 pointer-events-none">{icon}</span>
      ) : null}
      {image ? (
        <div className="absolute inset-0 z-20 opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100">
          <Image
            src={image}
            alt={hoverImageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={`${sizePx}px`}
            loading="eager"
          />
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/10 to-transparent dark:from-[#05254d]/20" />
        </div>
      ) : null}
    </div>
  );
}
