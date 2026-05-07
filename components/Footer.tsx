import React from "react";
import { Mouse } from "lucide-react";

export default function Footer() {
  const today = new Date();

  return (
    <div className="hidden md:flex md:items-center justify-between fixed bottom-0 w-full z-10 px-2 pb-2 bg-linear-to-t from-background to-transparent">
      <p className="font-mono leading-relaxed">
        &copy; {today.getFullYear()} JT Dev. All rights reserved.
      </p>
    </div>
  );
}
