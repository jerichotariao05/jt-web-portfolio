"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NO_IMAGE_FALLBACK = "/images/no_image.webp";

function ProjectCardThumbnails({
  title,
  thumbnail,
}: {
  title: string;
  thumbnail: string;
}) {
  const [src, setSrc] = useState(thumbnail);

  return (
    <>
      <div className="relative mx-auto mb-5 h-[170px] w-[80%] md:hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="rounded-xl object-cover object-top"
          sizes="80vw"
          onError={() => setSrc(NO_IMAGE_FALLBACK)}
        />
      </div>

      <div className="pointer-events-none absolute bottom-0 right-0 hidden h-[90%] w-[47%] md:block">
        <Image
          src={src}
          alt={title}
          fill
          className="rounded-tl-xl object-cover object-center"
          sizes="47vw"
          onError={() => setSrc(NO_IMAGE_FALLBACK)}
        />
      </div>
    </>
  );
}

export interface ProjectCardProps {
  title: string;
  thumbnail?: string;
  bgColor?: readonly [string, string];
  description?: string;
  keyFeatures?: readonly string[];
  technologies?: readonly string[];
  link?: string;
  isComingSoon?: boolean;
  onClick?: () => void;
}

export default function ProjectCard({
  title,
  thumbnail,
  bgColor = ["#0d1b2a", "#163354"],
  description,
  isComingSoon,
  onClick,
}: ProjectCardProps) {
  const [colorFrom, colorTo] = bgColor;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (!onClick) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <article
      className={cn(
        "relative flex flex-col overflow-hidden rounded-xl min-h-[240px]",
        onClick &&
          "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      )}
      style={{
        background: `linear-gradient(to bottom right, ${colorFrom}, ${colorTo})`,
      }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? "button" : undefined}
      aria-label={
        onClick ? `View details: ${title}` : undefined
      }
    >
      {/* Text content — left column on desktop */}
      <div className="relative z-10 flex flex-1 flex-col gap-3 p-6 md:p-8 md:max-w-[55%]">
        {isComingSoon && (
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white/80">
            <Clock className="size-3" /> Coming Soon
          </span>
        )}

        <h5 className="font-mono text-white text-lg md:text-xl font-medium">
          {title}
        </h5>

        {description && (
          <p className="text-white/70 leading-relaxed">{description}</p>
        )}

        {!isComingSoon && (
          <Button
            size="lg"
            className="mt-auto w-fit bg-transparent text-white pointer-events-none"
            tabIndex={-1}
            aria-hidden
          >
            View Details <ArrowUpRight className="size-4" />
          </Button>
        )}
      </div>

      {thumbnail ? (
        <ProjectCardThumbnails key={thumbnail} title={title} thumbnail={thumbnail} />
      ) : null}
    </article>
  );
}
