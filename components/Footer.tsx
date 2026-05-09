import React from "react";

export default function Footer() {
  const today = new Date();

  return (
    <div className="absolute bottom-1 w-full z-10 flex justify-center md:justify-start md:pl-2 items-center">
      <p className="font-mono text-sm leading-relaxed">
        &copy; {today.getFullYear()} JT Dev. All rights reserved.
      </p>
    </div>
  );
}
