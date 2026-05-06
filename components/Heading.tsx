import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ThemeToggle";

export default function Heading() {
  return (
    <div className="hidden md:block fixed top-3 w-fit z-10 pl-2">
      <div className="flex flex-col gap-1.5">
        <h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">
          Jericho Joshua Tariao
        </h3>
        <h5 className="text-lg md:text-xl font-medium">Software Developer</h5>
        <div className="flex gap-2 mt-2">
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
          {/* <ModeToggle /> */}
        </div>
      </div>
    </div>
  );
}
