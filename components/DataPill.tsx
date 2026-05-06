import React from "react";

export default function DataPill({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <p
      className={`font-mono absolute whitespace-nowrap bg-background border border-accent/50 rounded-full px-3 py-1 text-xs leading-relaxed ${className}`}
    >
      {title}
    </p>
  );
}
