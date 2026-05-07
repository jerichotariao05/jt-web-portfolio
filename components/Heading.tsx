import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ThemeToggle";

export default function Heading() {
  return (
    <div className="hidden md:block fixed top-0 w-fit z-10 px-1">
      <div className="flex flex-col gap-1.5 p-2">
        <h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight pr-8">
          Jericho Joshua Tariao
        </h3>
        <h5 className="font-mono text-lg md:text-xl font-medium">
          Software Developer
        </h5>
        {/* <div className="flex gap-2 mt-2">
          <Button
            size="lg"
            className="bg-transparent border border-primary/40 text-neutral-100 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Get in Touch
          </Button>
          <Button
            variant="energy"
            size="lg"
            className="rounded-full cursor-pointer"
          >
            View My Work
          </Button>
        </div> */}
        <ModeToggle />
      </div>
    </div>
  );
}
