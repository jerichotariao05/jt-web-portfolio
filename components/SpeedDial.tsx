"use client";

import { useState, useEffect, useRef } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpeedDialItem {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

interface SpeedDialProps {
  items: SpeedDialItem[];
  className?: string;
}

export default function SpeedDial({ items, className }: SpeedDialProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        open &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed bottom-4 right-4 z-50 flex flex-col items-end",
        className
      )}
    >
      {/* Speed Dial Menu */}
      <div
        className={cn(
          "flex flex-col items-end mb-4 space-y-3 transition-all duration-300 ease-in-out origin-bottom-right",
          open
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-90 pointer-events-none"
        )}
      >
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              item.onClick();
              setOpen(false);
            }}
            className="flex items-center group focus:outline-none"
            style={{ transitionDelay: open ? `${index * 50}ms` : "0ms" }}
          >
            <span className="mr-3 px-3 py-1 text-sm font-medium text-foreground bg-card/90 backdrop-blur-sm border border-accent rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
            <div className="flex items-center justify-center size-16 rounded-full shadow-lg border border-border bg-card hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
              {item.icon}
            </div>
          </button>
        ))}
      </div>

      {/* Main FAB */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex items-center justify-center size-16 text-primary-foreground bg-primary rounded-full shadow-xl hover:bg-primary/90 focus:ring-4 focus:ring-primary/30 focus:outline-none transition-all duration-300 active:scale-95"
      >
        <Plus
          className={cn(
            "size-8 transition-transform duration-300",
            open && "rotate-45 scale-110"
          )}
        />
      </button>
    </div>
  );
}
