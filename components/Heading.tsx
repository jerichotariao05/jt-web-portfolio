import React from "react";
import { ModeToggle } from "./ThemeToggle";
import { Smartphone } from "lucide-react";

export default function Heading() {
  return (
    <>
      <div className="fixed top-0 right-0 z-50 p-2">
        <ModeToggle />
      </div>

      <div className="hidden lg:block fixed top-0 left-0 w-fit z-10 px-1">
        <div className="flex flex-col gap-1.5 p-2">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight pr-8">
            Jericho Joshua Tariao
          </h3>
          <h5 className="font-mono text-lg md:text-xl font-medium bg-linear-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text">
            Software Developer
          </h5>
          <div className="w-fit flex gap-2 justify-center items-center bg-card px-2.5 py-1.5 rounded-full border border-border">
            <p className="text-xs font-medium leading-relaxed">
              Available for work
            </p>
            <span className="relative flex size-2.5">
              <span className="animate-ping-lg absolute inline-flex h-full w-full rounded-full bg-green-200"></span>
              <span className="relative inline-flex rounded-full size-2.5 bg-green-400"></span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:hidden gap-1.5 p-2 pl-2 pr-20 max-w-[min(100%,34rem)] z-10 fixed top-0 left-0">
        <div className="flex items-start gap-2">
          <Smartphone className="size-8 shrink-0" />
          <p className="font-mono md:text-base text-sm leading-relaxed">
            For the best experience, view this website on a desktop.
          </p>
        </div>
      </div>
    </>
  );
}
