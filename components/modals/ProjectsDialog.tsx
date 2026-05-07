"use client";

import AppDialog from "./AppDialog";
import { usePortfolioStore, selectModalOpen } from "@/store/usePortfolioStore";
import { BriefcaseBusiness } from "lucide-react";

export default function ProjectsDialog() {
  const open = usePortfolioStore(selectModalOpen("projects"));
  const closeModal = usePortfolioStore((state) => state.closeModal);

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
      <p className="text-sm text-muted-foreground leading-relaxed pr-4">
        These are websites and applications I developed. They showcase
        responsive layouts, interactive elements, and user-centered design.
      </p>
    </AppDialog>
  );
}
