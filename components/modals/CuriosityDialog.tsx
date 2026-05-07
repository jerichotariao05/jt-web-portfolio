"use client";

import AppDialog from "./AppDialog";
import { usePortfolioStore, selectModalOpen } from "@/store/usePortfolioStore";
import { FileQuestionMark } from "lucide-react";

export default function CuriosityDialog() {
  const open = usePortfolioStore(selectModalOpen("curiosity"));
  const closeModal = usePortfolioStore((state) => state.closeModal);

  return (
    <AppDialog
      open={open}
      onClose={() => closeModal("curiosity")}
      size="large"
      header={
        <h3 className="flex items-center gap-2 text-2xl md:text-3xl font-semibold tracking-tight">
          <FileQuestionMark className="size-8" /> ???
        </h3>
      }
    >
      <p className="text-muted-foreground text-sm">
        Curiosity details coming soon.
      </p>
    </AppDialog>
  );
}
