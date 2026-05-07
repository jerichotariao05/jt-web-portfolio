"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AppDialog from "./AppDialog";
import { usePortfolioStore, selectModalOpen } from "@/store/usePortfolioStore";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type AnyProject =
  | (typeof projects.school)[number]
  | (typeof projects.personal)[number];

function ProjectDetail({ project }: { project: AnyProject }) {
  const images = "images" in project ? project.images : ([] as string[]);
  const keyFeatures =
    "keyFeatures" in project ? project.keyFeatures : ([] as string[]);
  const technologies =
    "technologies" in project ? project.technologies : ([] as string[]);
  const link = "link" in project ? project.link : undefined;
  const description =
    "description" in project ? project.description : undefined;

  return (
    <div className="flex flex-col gap-6 pr-4 pb-4">
      <div className="flex flex-col gap-1.5">
        <h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>

        {description && (
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        )}
      </div>

      {keyFeatures.length > 0 && (
        <div className="flex flex-col gap-2">
          <h5 className="text-lg md:text-xl font-medium">Key Features</h5>
          <ul className="space-y-1.5">
            {keyFeatures.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      )}

      {technologies.length > 0 && (
        <div className="flex flex-col gap-2">
          <h5 className="text-lg md:text-xl font-medium">Technologies</h5>
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((t) => (
              <span
                key={t}
                className="rounded-full bg-muted px-2.5 py-0.5 text-sm font-medium border border-border"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {images.length > 0 && (
        <div className="flex flex-col gap-2">
          <h5 className="text-lg md:text-xl font-medium">Screenshots</h5>
          {images.length > 1 ? (
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((src, i) => (
                  <CarouselItem key={i}>
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <Image
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 700px"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          ) : (
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src={images[0]}
                alt={project.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>
          )}
        </div>
      )}

      {link && (
        <Button
          asChild
          size="lg"
          className="w-fit text-foreground rounded-full"
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            Visit Live Site <ArrowUpRight className="size-4" />
          </a>
        </Button>
      )}
    </div>
  );
}

export default function ProjectsDialog() {
  const open = usePortfolioStore(selectModalOpen("projects"));
  const closeModal = usePortfolioStore((state) => state.closeModal);
  const [selectedProject, setSelectedProject] = useState<AnyProject | null>(
    null,
  );

  // Reset drill-down when dialog closes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!open) setSelectedProject(null);
    }, 300); // after close animation
    return () => clearTimeout(timer);
  }, [open]);

  const isDetail = selectedProject !== null;

  return (
    <AppDialog
      open={open}
      onClose={() => closeModal("projects")}
      size="large"
      header={
        <div className="flex items-center gap-2">
          <BriefcaseBusiness className="size-8" />
          <h2 className="flex items-center gap-2 text-3xl md:text-4xl font-semibold tracking-tight">
            Projects
          </h2>
        </div>
      }
    >
      {isDetail ? (
        <>
          <div className="flex items-center gap-1.5 mb-4">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setSelectedProject(null)}
              aria-label="Back to projects"
            >
              <ArrowLeft className="size-4" />
            </Button>
            <span className="text-muted-foreground font-normal">Projects</span>
            <ChevronRight className="size-3.5 text-muted-foreground" />
            <span className="font-semibold truncate">
              {selectedProject.title}
            </span>
          </div>
          <ProjectDetail project={selectedProject} />
        </>
      ) : (
        <>
          <p className="text-sm text-muted-foreground leading-relaxed pr-4 mb-5">
            These are websites and applications I developed. They showcase
            responsive layouts, interactive elements, and user-centered design.
          </p>

          <Tabs defaultValue="school">
            <TabsList variant="line">
              <TabsTrigger value="school">School</TabsTrigger>
              <TabsTrigger value="personal">Personal</TabsTrigger>
            </TabsList>
            <TabsContent value="school">
              <div className="flex flex-col gap-4 pt-4 pr-4 pb-2">
                {projects.school.map((project) => (
                  <ProjectCard
                    key={project.title}
                    {...project}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="personal">
              <div className="flex flex-col gap-4 pt-4 pr-4 pb-2">
                {projects.personal.map((project) => (
                  <ProjectCard
                    key={project.title}
                    {...project}
                    onClick={
                      "isComingSoon" in project
                        ? undefined
                        : () => setSelectedProject(project)
                    }
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </>
      )}
    </AppDialog>
  );
}
