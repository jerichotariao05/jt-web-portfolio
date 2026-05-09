"use client";

import AboutDialog from "@/components/modals/AboutDialog";
import ContactDialog from "@/components/modals/ContactDialog";
import CuriosityDialog from "@/components/modals/CuriosityDialog";
import ProjectsDialog from "@/components/modals/ProjectsDialog";
import SkillsDialog from "@/components/modals/SkillsDialog";
import DataPill from "@/components/DataPill";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Nodes from "@/components/Nodes";
import RadarField from "@/components/RadarField";
import RadarRing from "@/components/RadarRing";
import RadarPageSweep from "@/components/RadarPageSweep";
import SpeedDial from "@/components/SpeedDial";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import {
  User,
  BriefcaseBusiness,
  FileQuestionMark,
  Code,
  Send,
  Mouse,
} from "lucide-react";

export default function Home() {
  const openModal = usePortfolioStore((state) => state.openModal);

  const navItems = [
    {
      label: "???",
      icon: <FileQuestionMark className="size-8" />,
      onClick: () => openModal("curiosity"),
    },
    {
      label: "Skills",
      icon: <Code className="size-8" />,
      onClick: () => openModal("skills"),
    },
    {
      label: "Projects",
      icon: <BriefcaseBusiness className="size-8" />,
      onClick: () => openModal("projects"),
    },
    {
      label: "About",
      icon: <User className="size-8" />,
      onClick: () => openModal("about"),
    },
  ];
  return (
    <>
      <Heading />
      {/* Overlay for readability */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-5 h-32 bg-linear-to-b from-background/95 via-background/70 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 bottom-0 z-5 h-32 bg-linear-to-t from-background/95 via-background/70 to-transparent"
      />
      <main className="relative flex w-full min-h-dvh items-center justify-center overflow-hidden sm:overflow-visible">
        <RadarPageSweep />
        <div className="relative flex flex-col items-center justify-center gap-1.5 p-2">
          <DataPill
            title="Growth-oriented"
            className="block lg:hidden right-[48%] top-[-30%] translate-x-full -translate-y-1/2"
          />

          <DataPill
            title="Shipped work"
            className="block lg:hidden left-[38%] top-[-10%] -translate-x-full -translate-y-1/2"
          />
          <DataPill
            title="Attention to craft"
            className="block lg:hidden left-[60%] bottom-[-30%] -translate-x-full -translate-y-1/2"
          />
          <Nodes
            ariaLabel="Open About"
            icon={<User className="size-18" />}
            className="intersect-once intersect-no-queue lg:motion-safe:opacity-0 lg:motion-safe:intersect:animate-fade"
            width={160}
            height={160}
            image={"/images/profile.webp"}
            onClick={() => openModal("about")}
          />
          <div className="flex lg:hidden flex-col justify-center items-center gap-1.5 p-2">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-center">
              Jericho Joshua Tariao
            </h1>
            <h3 className="font-mono text-xl font-semibold tracking-tight">
              Software Developer
            </h3>
          </div>
        </div>
        <RadarRing size={620} />
        <RadarRing size={1020} />
        <RadarRing size={1440} />
        <RadarRing size={1460} variant="outline" />
        <div className="hidden lg:block">
          {/* Projects Zone */}
          <RadarField size={690} rotation={-22}>
            <div className="relative">
              <HoverCard>
                <HoverCardTrigger>
                  <Nodes
                    ariaLabel="Open Projects"
                    icon={<BriefcaseBusiness className="size-12" />}
                    className="intersect-once intersect-no-queue lg:motion-safe:opacity-0 lg:motion-safe:intersect:animate-fade"
                    width={120}
                    height={120}
                    onClick={() => openModal("projects")}
                  />
                </HoverCardTrigger>
                <HoverCardContent side="right" className="w-fit" sideOffset={8}>
                  <h5 className="font-heading text-lg md:text-xl font-medium tracking-tight uppercase bg-linear-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text">
                    Projects
                  </h5>
                  <p className="font-mono text-sm leading-relaxed">
                    Things I&apos;ve built
                  </p>
                </HoverCardContent>
              </HoverCard>
              <DataPill
                title="Stocks Inventory System"
                className="left-[-8%] top-[30%] -translate-x-full -translate-y-1/2 intersect-once intersect-no-queue lg:motion-safe:opacity-0 lg:motion-safe:intersect:animate-fade"
              />
              <DataPill
                title="Heavenly Garden by Angels"
                className="right-[8%] top-[-2%] translate-x-full -translate-y-1/2 intersect-once intersect-no-queue lg:motion-safe:opacity-0 lg:motion-safe:intersect:animate-fade"
              />
              <DataPill
                title="Math for Kids"
                className="left-[-40%] bottom-[10%] -translate-x-1/2 translate-y-full intersect-once intersect-no-queue lg:motion-safe:opacity-0 lg:motion-safe:intersect:animate-fade"
              />
            </div>
          </RadarField>
          {/* Skills Zone */}
          <RadarField size={720} rotation={110}>
            <div className="relative">
              <HoverCard>
                <HoverCardTrigger>
                  <Nodes
                    ariaLabel="Open Technical Skills"
                    icon={<Code className="size-10" />}
                    className="intersect-once intersect-no-queue lg:motion-safe:opacity-0 lg:motion-safe:intersect:animate-fade"
                    width={100}
                    height={100}
                    onClick={() => openModal("skills")}
                  />
                </HoverCardTrigger>
                <HoverCardContent side="left" className="w-fit" sideOffset={8}>
                  <h5 className="font-heading text-lg md:text-xl font-medium tracking-tight uppercase bg-linear-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text">
                    Technical Skills
                  </h5>
                  <p className="font-mono text-sm leading-relaxed">
                    Tools and Technologies I&apos;ve Used
                  </p>
                </HoverCardContent>
              </HoverCard>
              <DataPill
                title="React"
                className="left-[-8%] top-[20%] -translate-x-full -translate-y-1/2 intersect-once intersect-no-queue lg:motion-safe:opacity-0 lg:motion-safe:intersect:animate-fade"
              />
              <DataPill
                title="PostgreSQL"
                className="left-[-20%] top-[70%] -translate-x-full -translate-y-1/2 intersect-once intersect-no-queue lg:motion-safe:opacity-0 lg:motion-safe:intersect:animate-fade"
              />
              <DataPill
                title="Next.js"
                className="right-[8%] top-[-8%] translate-x-full -translate-y-1/2 intersect-once intersect-no-queue lg:motion-safe:opacity-0 lg:motion-safe:intersect:animate-fade"
              />
              <DataPill
                title="Django"
                className="right-[-20%] bottom-[20%] translate-x-full -translate-y-1/2 intersect-once intersect-no-queue lg:motion-safe:opacity-0 lg:motion-safe:intersect:animate-fade"
              />
              <DataPill
                title="Python"
                className="left-[80%] bottom-[-10%] -translate-x-1/2 translate-y-full intersect-once intersect-no-queue lg:motion-safe:opacity-0 lg:motion-safe:intersect:animate-fade"
              />
            </div>
          </RadarField>
          {/* Curiosity Zone*/}
          <RadarField size={590} rotation={-76}>
            <div className="relative">
              <HoverCard>
                <HoverCardTrigger>
                  <Nodes
                    ariaLabel="Open more about this site"
                    icon={<FileQuestionMark className="size-10" />}
                    className="intersect-once intersect-no-queue lg:motion-safe:opacity-0 lg:motion-safe:intersect:animate-fade"
                    width={100}
                    height={100}
                    onClick={() => openModal("curiosity")}
                  />
                </HoverCardTrigger>
                <HoverCardContent side="right" className="w-fit" sideOffset={8}>
                  <h5 className="font-heading text-lg md:text-xl font-medium tracking-tight uppercase bg-linear-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text">
                    ???
                  </h5>
                  <p className="font-mono text-sm leading-relaxed">
                    Information you might wanna know or not
                  </p>
                </HoverCardContent>
              </HoverCard>
              <DataPill
                title="Things about me"
                className="left-[-12%] top-1/2 -translate-x-full -translate-y-1/2 intersect-once intersect-no-queue lg:motion-safe:opacity-0 lg:motion-safe:intersect:animate-fade"
              />
              <DataPill
                title="Hobbies"
                className="left-[10%] top-[-10%] -translate-x-full -translate-y-1/2 intersect-once intersect-no-queue lg:motion-safe:opacity-0 lg:motion-safe:intersect:animate-fade"
              />
            </div>
          </RadarField>
          {/* Contact Zone */}
          <RadarField size={678} rotation={160}>
            <div className="relative">
              <HoverCard>
                <HoverCardTrigger>
                  <Nodes
                    ariaLabel="Open Contact"
                    icon={<Send className="size-12" />}
                    className="intersect-once intersect-no-queue lg:motion-safe:opacity-0 lg:motion-safe:intersect:animate-fade"
                    width={120}
                    height={120}
                    onClick={() => openModal("contact")}
                  />
                </HoverCardTrigger>
                <HoverCardContent side="left" className="w-fit" sideOffset={8}>
                  <h5 className="font-heading text-lg md:text-xl font-medium tracking-tight uppercase bg-linear-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text">
                    Contact
                  </h5>
                  <p className="font-mono text-sm leading-relaxed">
                    How to get in touch with me
                  </p>
                </HoverCardContent>
              </HoverCard>
              <DataPill
                title="jerichotariao15@gmail.com"
                className="right-[8%] top-[-2%] translate-x-full -translate-y-1/2 intersect-once intersect-no-queue lg:motion-safe:opacity-0 lg:motion-safe:intersect:animate-fade"
              />
              <DataPill
                title="LinkedIn"
                className="right-[-8%] top-1/2 translate-x-full -translate-y-1/2 intersect-once intersect-no-queue lg:motion-safe:opacity-0 lg:motion-safe:intersect:animate-fade"
              />
              <DataPill
                title="GitHub"
                className="left-[-40%] bottom-[20%] -translate-x-1/2 translate-y-full intersect-once intersect-no-queue lg:motion-safe:opacity-0 lg:motion-safe:intersect:animate-fade"
              />
            </div>
          </RadarField>
        </div>
        <RadarField size={690} rotation={-50}>
          <span className="relative inline-flex size-2 rounded-full bg-accent shadow-[0_0_8px_color-mix(in_srgb,var(--ring)_80%,transparent)]" />
        </RadarField>
        <RadarField size={420} rotation={68}>
          <span className="relative inline-flex size-2 rounded-full bg-accent shadow-[0_0_8px_color-mix(in_srgb,var(--ring)_80%,transparent)]" />
        </RadarField>
        <RadarField size={480} rotation={28}>
          <span className="relative inline-flex size-3 rounded-full bg-accent shadow-[0_0_8px_color-mix(in_srgb,var(--ring)_80%,transparent)]" />
        </RadarField>
        <RadarField size={510} rotation={-140}>
          <span className="relative inline-flex size-2 rounded-full bg-accent shadow-[0_0_8px_color-mix(in_srgb,var(--ring)_80%,transparent)]" />
        </RadarField>
        <RadarField size={700} rotation={128}>
          <span className="relative inline-flex size-2 rounded-full bg-accent shadow-[0_0_8px_color-mix(in_srgb,var(--ring)_80%,transparent)]" />
        </RadarField>
        <RadarField size={880} rotation={138}>
          <span className="relative inline-flex size-3 rounded-full bg-accent shadow-[0_0_8px_color-mix(in_srgb,var(--ring)_80%,transparent)]" />
        </RadarField>
        <RadarField size={420} rotation={-108}>
          <span className="relative inline-flex size-3 rounded-full bg-accent shadow-[0_0_8px_color-mix(in_srgb,var(--ring)_80%,transparent)]" />
        </RadarField>
        <RadarField size={320} rotation={-180}>
          <span className="relative inline-flex size-2 rounded-full bg-accent shadow-[0_0_8px_color-mix(in_srgb,var(--ring)_80%,transparent)]" />
        </RadarField>
      </main>
      <div
        aria-hidden
        className="hidden absolute z-20 bottom-1 left-0 w-full lg:flex flex-col items-center justify-center gap-2 cursor-help"
      >
        <Mouse className="size-6" />
        <p className="font-mono text-sm leading-relaxed">
          Move or Click to Navigate
        </p>
      </div>
      <Footer />
      <SpeedDial items={navItems} />
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          openModal("contact");
        }}
        aria-label="Contact button"
        className="fixed bottom-10 lg:bottom-2 right-2 z-50 flex items-center justify-center size-16 text-foreground rounded-full shadow-xl cursor-pointer conic-border-rotate"
      >
        <Send className="size-8" />
      </button>

      <ProjectsDialog />
      <SkillsDialog />
      <CuriosityDialog />
      <AboutDialog />
      <ContactDialog />
    </>
  );
}
