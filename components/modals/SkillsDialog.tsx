"use client";

import AppDialog from "./AppDialog";
import { usePortfolioStore, selectModalOpen } from "@/store/usePortfolioStore";
import { Code } from "lucide-react";

export default function SkillsDialog() {
  const open = usePortfolioStore(selectModalOpen("skills"));
  const closeModal = usePortfolioStore((state) => state.closeModal);

  return (
    <AppDialog
      open={open}
      onClose={() => closeModal("skills")}
      header={
        <span className="flex items-center gap-2">
          <Code className="size-5" /> Skills
        </span>
      }
    >
      <p className="text-muted-foreground text-sm">Skills details coming soon.</p>
    </AppDialog>
  );
}
