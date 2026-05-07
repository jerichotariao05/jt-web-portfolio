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
import { usePortfolioStore } from "@/store/usePortfolioStore";
import {
  User,
  BriefcaseBusiness,
  FileQuestionMark,
  Code,
  Send,
  Mouse,
} from "lucide-react";
import { ModeToggle } from "@/components/ThemeToggle";

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
      {/* Theme-aware top/bottom fade to keep fixed header/footer readable */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-5 h-32 bg-linear-to-b from-background/95 via-background/70 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 bottom-0 z-5 h-32 bg-linear-to-t from-background/95 via-background/70 to-transparent"
      />
      <main className="relative flex w-full min-h-dvh items-center justify-center overflow-hidden sm:overflow-visible">
        {/* <RadarPageSweep /> */}
        <div className="flex flex-col items-center justify-center gap-1.5 p-2">
          <Nodes
            icon={<User className="size-18" />}
            width={180}
            height={180}
            image={"/images/profile.webp"}
            onClick={() => openModal("about")}
          />
          <div className="flex justify-center items-center lg:hidden flex-col gap-1.5 p-2">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center">
              Jericho Joshua Tariao
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
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
              <Nodes
                icon={<BriefcaseBusiness className="size-12" />}
                width={120}
                height={120}
                onClick={() => openModal("projects")}
              />
              <DataPill
                title="Stocks Inventory System"
                className="left-[-8%] top-[30%] -translate-x-full -translate-y-1/2"
              />
              <DataPill
                title="Heavenly Garden by Angels"
                className="right-[8%] top-[-2%] translate-x-full -translate-y-1/2"
              />
              <DataPill
                title="Math for Kids"
                className="left-[-40%] bottom-[10%] -translate-x-1/2 translate-y-full"
              />
            </div>
          </RadarField>
          {/* Skills Zone */}
          <RadarField size={720} rotation={110}>
            <div className="relative">
              <Nodes
                icon={<Code className="size-10" />}
                width={100}
                height={100}
                onClick={() => openModal("skills")}
              />
              <DataPill
                title="React"
                className="left-[-8%] top-[20%] -translate-x-full -translate-y-1/2"
              />
              <DataPill
                title="PostgreSQL"
                className="left-[-20%] top-[70%] -translate-x-full -translate-y-1/2"
              />
              <DataPill
                title="Next.js"
                className="right-[8%] top-[-8%] translate-x-full -translate-y-1/2"
              />
              <DataPill
                title="Django"
                className="right-[-20%] bottom-[20%] translate-x-full -translate-y-1/2"
              />
              <DataPill
                title="Python"
                className="left-[80%] bottom-[-10%] -translate-x-1/2 translate-y-full"
              />
            </div>
          </RadarField>
          {/* Curiosity Zone*/}
          <RadarField size={590} rotation={-76}>
            <div className="relative">
              <Nodes
                icon={<FileQuestionMark className="size-10" />}
                width={100}
                height={100}
                onClick={() => openModal("curiosity")}
              />
              <DataPill
                title="Things about me"
                className="left-[-12%] top-1/2 -translate-x-full -translate-y-1/2"
              />
              <DataPill
                title="Hobbies"
                className="left-[10%] top-[-10%] -translate-x-full -translate-y-1/2"
              />
            </div>
          </RadarField>
          {/* Contact Zone */}
          <RadarField size={678} rotation={160}>
            <div className="relative">
              <Nodes
                icon={<Send className="size-12" />}
                width={120}
                height={120}
                onClick={() => openModal("contact")}
              />
              <DataPill
                title="jerichotariao15@gmail.com"
                className="right-[8%] top-[-2%] translate-x-full -translate-y-1/2"
              />
              <DataPill
                title="LinkedIn"
                className="right-[-8%] top-1/2 translate-x-full -translate-y-1/2"
              />
              <DataPill
                title="GitHub"
                className="left-[-40%] bottom-[20%] -translate-x-1/2 translate-y-full"
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
        <RadarField size={700} rotation={128}>
          <span className="relative inline-flex size-2 rounded-full bg-accent shadow-[0_0_8px_color-mix(in_srgb,var(--ring)_80%,transparent)]" />
        </RadarField>
        <RadarField size={880} rotation={138}>
          <span className="relative inline-flex size-3 rounded-full bg-accent shadow-[0_0_8px_color-mix(in_srgb,var(--ring)_80%,transparent)]" />
        </RadarField>
        <RadarField size={420} rotation={-118}>
          <span className="relative inline-flex size-3 rounded-full bg-accent shadow-[0_0_8px_color-mix(in_srgb,var(--ring)_80%,transparent)]" />
        </RadarField>
      </main>
      <div className="hidden absolute z-20 bottom-1 left-0 w-full lg:flex flex-col items-center justify-center gap-2 cursor-help">
        <Mouse className="size-6" />
        <p className="font-mono text-sm leading-relaxed">
          Move or Click to Navigate
        </p>
      </div>
      <Footer />
      <SpeedDial items={navItems} />

      <ProjectsDialog />
      <SkillsDialog />
      <CuriosityDialog />
      <AboutDialog />
      <ContactDialog />
    </>
  );
}
