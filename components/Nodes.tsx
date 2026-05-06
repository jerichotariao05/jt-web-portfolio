import React from "react";

interface NodeProps {
  title?: string;
  description?: string;
  width: number;
  height: number;
  icon: React.ReactElement;
  onClick?: () => void;
}

export default function Nodes({
  title,
  description,
  width,
  height,
  icon,
  onClick,
}: NodeProps) {
  return (
    <div
      className="relative flex items-center justify-center rounded-full border border-ring/40 bg-[radial-gradient(circle,color-mix(in_srgb,var(--ring)_25%,transparent)_0%,color-mix(in_srgb,var(--ring)_5%,transparent)_40%,transparent_70%)] shadow-[inset_0_0_12px_color-mix(in_srgb,var(--ring)_35%,transparent),0_0_12px_color-mix(in_srgb,var(--ring)_15%,transparent)] transition-all duration-300 hover:scale-105 hover:shadow-[inset_0_0_16px_color-mix(in_srgb,var(--ring)_60%,transparent),0_0_20px_color-mix(in_srgb,var(--ring)_35%,transparent)]"
      onClick={onClick}
      style={{
        width,
        height,
      }}
    >
      {icon}
    </div>
  );
}
