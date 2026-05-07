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
      header={
        <span className="flex items-center gap-2">
          <BriefcaseBusiness className="size-5" /> Projects
        </span>
      }
    >
      <p className="text-muted-foreground text-sm">Project details coming soon.</p>
    </AppDialog>
  );
}
