import React from "react";

export default function Footer() {
  const today = new Date();

  return (
    <div className="absolute bottom-2 w-full z-10 flex justify-center lg:justify-start lg:pl-2 items-center">
      <p className="font-mono text-sm leading-relaxed">
        &copy; {today.getFullYear()} Jericho Joshua Tariao.
      </p>
    </div>
  );
}
