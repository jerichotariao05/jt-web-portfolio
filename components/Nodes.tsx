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
      className="relative flex items-center justify-center rounded-full border border-ring/40 bg-[#05366F]/70 shadow-[0_0_10px_#05366F99,0_0_24px_#05366F4D,inset_0_0_12px_#05366F26] transition-all duration-300 cursor-pointer hover:scale-105 hover:border-[#169BE9]/90 hover:shadow-[inset_0_0_16px_color-mix(in_srgb,var(--ring)_60%,transparent),0_0_20px_color-mix(in_srgb,var(--ring)_35%,transparent)]"
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
