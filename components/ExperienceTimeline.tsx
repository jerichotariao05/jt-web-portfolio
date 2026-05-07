"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";

export type ExperienceTimelineItem = {
  title: string;
  org: string;
  dateRange: string;
  description: string[];
  icon: React.ReactNode;
};

type ExperienceTimelineProps = {
  items: ExperienceTimelineItem[];
  className?: string;
};

export default function ExperienceTimeline({
  items,
  className,
}: ExperienceTimelineProps) {
  return (
    <div className={cn("w-full", className)}>
      {/* Mobile: vertical timeline */}
      <div className="min-h-[386px] overflow-y-auto pl-6 pr-4 sm:hidden">
        <ol className="relative border-s border-primary/90">
          {items.map((item, idx) => (
            <li key={`${item.title}-${item.org}-${idx}`} className="mb-10 ms-6">
              <span className="absolute -inset-s-4 flex size-8 items-center justify-center rounded-full bg-primary">
                {item.icon}
              </span>
              <div className="mt-3 max-w-md">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-sm">{item.org}</p>
                <span className="text-xs text-muted-foreground">
                  {item.dateRange}
                </span>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Desktop+: horizontal timeline */}
      <div className="hidden max-h-[400px] overflow-x-auto overflow-y-hidden pb-6 sm:block">
        <div className="flex min-w-max space-x-8 py-8 px-4">
          <ol className="sm:flex">
            {items.map((item, idx) => (
              <li
                key={`${item.title}-${item.org}-${idx}`}
                className="relative mb-6 sm:mb-0"
              >
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center rounded-full bg-primary p-3">
                    {item.icon}
                  </div>
                  {idx !== items.length - 1 && (
                    <div className="hidden h-0.5 w-full bg-primary/90 sm:flex" />
                  )}
                </div>
                <div className="mt-3 max-w-md sm:pe-8">
                  <p className="text-sm font-semibold lg:text-base">
                    {item.title}
                  </p>
                  <p className="text-sm">{item.org}</p>
                  <span className="text-xs text-muted-foreground">
                    {item.dateRange}
                  </span>
                  <ScrollArea className="h-[200px]">
                    <ul className="mt-4 list-disc space-y-1 px-4 text-sm text-muted-foreground">
                      {item.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
