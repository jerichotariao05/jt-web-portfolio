"use client";

import AppDialog from "./AppDialog";
import { usePortfolioStore, selectModalOpen } from "@/store/usePortfolioStore";
import { MonitorCog, User, FileCode } from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ExperienceTimeline, {
  type ExperienceTimelineItem,
} from "@/components/ExperienceTimeline";
import { FileIcon } from "lucide-react";

export default function AboutDialog() {
  const open = usePortfolioStore(selectModalOpen("about"));
  const closeModal = usePortfolioStore((state) => state.closeModal);

  const experienceItems: ExperienceTimelineItem[] = [
    {
      title: "IT Support Intern",
      org: "Speakify Team",
      dateRange: "November 2024 - March 2025",
      description: [
        "Provided technical support for software, hardware, and network-related issues, improving system reliability and user productivity.",
      ],
      icon: <MonitorCog className="size-4" aria-hidden="true" />,
    },
    {
      title: "Web Developer",
      org: "CyTech Development and Operations Inc.",
      dateRange: "December 2025 - March 2026",
      description: [
        "Implemented frontend components and dashboard widgets for a unified cybersecurity operating system used globally, working in React, Next.js, TypeScript, and Material UI within an Agile team with daily standups and code reviews via GitLab.",
        "Built KPI dashboard widgets including interactive gauges, trend charts, and sortable data tables integrated with REST APIs using TanStack Query for data fetching, caching, and real-time polling.",
        "Improved reusable chart components in a Storybook-based shared component  library, updating and maintaining stories to match Figma specifications across a microfrontend architecture.",
        "Delivered theme-aware (light and dark mode) and responsive interfaces across multiple modules, achieving close alignment with Figma mockups.",
        "Performed full-stack integration work: implemented service-to-service authentication between microservices, and validated changes with Postman.",
      ],
      icon: <FileCode className="size-4" aria-hidden="true" />,
    },
  ];

  return (
    <AppDialog
      open={open}
      onClose={() => closeModal("about")}
      size="xlarge"
      header={
        <div className="flex items-center gap-2">
          <User className="size-8" />
          <h2 className="flex items-center gap-2 text-3xl md:text-4xl font-semibold tracking-tight">
            About
          </h2>
        </div>
      }
    >
      <div className="p-2 h-full min-h-0 flex flex-col">
        <Tabs
          defaultValue="profile"
          className="w-full h-full min-h-0 flex flex-col"
        >
          <TabsList variant="line">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="experience">Work Experience</TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="flex-1 min-h-0">
            {" "}
            <div className="h-full min-h-0 grid grid-cols-1 sm:grid-cols-3 gap-2 items-start p-2">
              <div className="col-span-1 flex flex-col items-center justify-center sm:justify-start gap-2">
                <div className="relative w-full max-w-[260px] aspect-4/5 mx-auto">
                  <Image
                    src="/images/profile.webp"
                    alt="Profile"
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <Button
                  size="lg"
                  className="w-fit text-foreground px-4 rounded-full"
                  asChild
                >
                  <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileIcon />
                    View Resume
                  </a>
                </Button>
              </div>
              <div className="col-span-2 h-full min-h-0">
                <ScrollArea className="h-full pr-4">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-mono text-2xl md:text-3xl font-semibold tracking-tight mb-4 ">
                      My Journey in Development
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      What drew me into developing websites and applications was
                      realizing that I could combine creativity with
                      functionality, building things that not only look good but
                      also work the way they are supposed to. There is something
                      rewarding about turning ideas into real products that
                      people can actually use in their daily lives.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      I care about the details that shape the overall
                      experience. Not just whether something works, but whether
                      it feels intentional and easy to use. Faithfully
                      translating a design into code is one of the things I
                      enjoy working on because it contributes to how users
                      experience a product as a whole.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      I am still early in my career, but I have already had
                      exposure to production codebases, and collaborative
                      development environments. Currently, I am looking for a
                      role where I can continue building on that foundation
                      while growing alongside a team I can learn from.
                    </p>
                  </div>
                </ScrollArea>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="experience" className="flex-1 min-h-0">
            <div className="flex flex-col gap-2 h-full min-h-0">
              <h3 className="font-mono text-2xl md:text-3xl font-semibold tracking-tight mb-4 ">
                My career highlights
              </h3>
              <ExperienceTimeline items={experienceItems} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppDialog>
  );
}
