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
      size="xlarge"
      header={
        <h3 className="flex items-center gap-2 text-2xl md:text-3xl font-semibold tracking-tight">
          <BriefcaseBusiness className="size-8" /> Projects
        </h3>
      }
    >
      <p className="text-muted-foreground text-sm">
        Project details coming soon.
      </p>
    </AppDialog>
  );
}
