import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ThemeToggle";
import { Smartphone } from "lucide-react";

export default function Heading() {
  return (
    <>
      <div className="hidden lg:block fixed top-0 w-fit z-10 px-1">
        <div className="flex-col gap-1.5 p-2">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight pr-8">
            Jericho Joshua Tariao
          </h3>
          <h5 className="font-mono text-lg md:text-xl font-medium">
            Software Developer
          </h5>
        </div>
      </div>
      <div className="flex flex-col lg:hidden gap-1.5 p-2 w-fit z-10 fixed top-0 left-0">
        <div className="flex items-center gap-2">
          <Smartphone className="size-8" />
          <p className="font-mono md:text-base text-sm leading-relaxed">
            For the best experience, view this website on a desktop.
          </p>
        </div>
      </div>
    </>
  );
}
