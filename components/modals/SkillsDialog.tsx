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
      size="large"
      header={
        <h3 className="flex items-center gap-2 text-2xl md:text-3xl font-semibold tracking-tight">
          <Code className="size-8" /> Skills
        </h3>
      }
    >
      <p className="text-muted-foreground text-sm">
        Skills details coming soon.
      </p>
    </AppDialog>
  );
}
