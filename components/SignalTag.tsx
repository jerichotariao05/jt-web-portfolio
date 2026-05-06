import React from "react";

export default function SignalTag({ title }: { title: string }) {
  return (
    <div className="bg-background border border-border rounded-full px-3 py-1">
      {title}
    </div>
  );
}
