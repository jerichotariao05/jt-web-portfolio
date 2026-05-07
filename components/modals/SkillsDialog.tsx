"use client";

import AppDialog from "./AppDialog";
import { usePortfolioStore, selectModalOpen } from "@/store/usePortfolioStore";
import { Code } from "lucide-react";
import { skills } from "@/lib/data";

export default function SkillsDialog() {
  const open = usePortfolioStore(selectModalOpen("skills"));
  const closeModal = usePortfolioStore((state) => state.closeModal);

  return (
    <AppDialog
      size="medium"
      open={open}
      onClose={() => closeModal("skills")}
      header={
        <div className="flex items-center gap-2">
          <Code className="size-8" />
          <h2 className="flex items-center gap-2 text-3xl md:text-4xl font-semibold tracking-tight">
            Skills
          </h2>
        </div>
      }
    >
      <p className="text-muted-foreground leading-relaxed mb-4">
        These are the technologies and tools I use to build my projects.
      </p>
      <div className="flex flex-col gap-8">
        {/* Frontend Development */}
        <div className="flex flex-col gap-2">
          <h5 className="text-lg md:text-xl font-medium">
            Frontend Development
          </h5>
          <ul className="flex flex-wrap items-center gap-2">
            {skills.frontend.map((skill) => (
              <li
                key={skill.title}
                className="inline-flex items-center gap-2 bg-background border border-border px-3 py-1 rounded-full"
              >
                <span className="inline-flex size-4 shrink-0 [&>svg]:size-4 [&>svg]:shrink-0">
                  {skill.icon}
                </span>
                <span className="text-sm text-accent-foreground leading-relaxed">
                  {skill.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* UI and Design */}
        <div className="flex flex-col gap-2">
          <h5 className="text-lg md:text-xl font-medium">UI and Design</h5>
          <ul className="flex flex-wrap items-center gap-2">
            {skills.ui_and_design.map((skill) => (
              <li
                key={skill.title}
                className="inline-flex items-center gap-2 bg-background border border-border px-3 py-1 rounded-full"
              >
                <span className="inline-flex size-4 shrink-0 [&>svg]:size-4 [&>svg]:shrink-0">
                  {skill.icon}
                </span>
                <span className="text-sm text-accent-foreground leading-relaxed">
                  {skill.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* State Management */}
        <div className="flex flex-col gap-2">
          <h5 className="text-lg md:text-xl font-medium">State Management</h5>
          <ul className="flex flex-wrap items-center gap-2">
            {skills.state_management.map((skill) => (
              <li
                key={skill.title}
                className="inline-flex items-center gap-2 bg-background border border-border px-3 py-1 rounded-full"
              >
                <span className="inline-flex size-4 shrink-0 [&>svg]:size-4 [&>svg]:shrink-0">
                  {skill.icon}
                </span>
                <span className="text-sm text-accent-foreground leading-relaxed">
                  {skill.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* Backend Development */}
        <div className="flex flex-col gap-2">
          <h5 className="text-lg md:text-xl font-medium">
            Backend Development
          </h5>
          <ul className="flex flex-wrap items-center gap-2">
            {skills.backend.map((skill) => (
              <li
                key={skill.title}
                className="inline-flex items-center gap-2 bg-background border border-border px-3 py-1 rounded-full"
              >
                <span className="inline-flex size-4 shrink-0 [&>svg]:size-4 [&>svg]:shrink-0">
                  {skill.icon}
                </span>
                <span className="text-sm text-accent-foreground leading-relaxed">
                  {skill.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* Databases */}
        <div className="flex flex-col gap-2">
          <h5 className="text-lg md:text-xl font-medium">Databases</h5>
          <ul className="flex flex-wrap items-center gap-2">
            {skills.databases.map((skill) => (
              <li
                key={skill.title}
                className="inline-flex items-center gap-2 bg-background border border-border px-3 py-1 rounded-full"
              >
                <span className="inline-flex size-4 shrink-0 [&>svg]:size-4 [&>svg]:shrink-0">
                  {skill.icon}
                </span>
                <span className="text-sm text-accent-foreground leading-relaxed">
                  {skill.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* Tools */}
        <div className="flex flex-col gap-2">
          <h5 className="text-lg md:text-xl font-medium">Tools</h5>
          <ul className="flex flex-wrap items-center gap-2">
            {skills.tools.map((skill) => (
              <li
                key={skill.title}
                className="inline-flex items-center gap-2 bg-background border border-border px-3 py-1 rounded-full"
              >
                <span className="inline-flex size-4 shrink-0 [&>svg]:size-4 [&>svg]:shrink-0">
                  {skill.icon}
                </span>
                <span className="text-sm text-accent-foreground leading-relaxed">
                  {skill.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AppDialog>
  );
}
