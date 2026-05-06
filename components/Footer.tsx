import React from "react";

export default function Footer() {
  const today = new Date();

  return (
    <div className="hidden md:block fixed bottom-0 w-full z-10 px-2 bg-linear-to-t from-background to-transparent">
      <div className="flex flex-col gap-1.5 p-2">
        <p className="leading-relaxed">
          &copy; {today.getFullYear()} JT Dev. All rights reserved.
        </p>
      </div>
    </div>
  );
}
