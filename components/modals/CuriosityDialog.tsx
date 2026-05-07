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
      header={
        <span className="flex items-center gap-2">
          <FileQuestionMark className="size-5" /> ???
        </span>
      }
    >
      <p className="text-muted-foreground text-sm">Curiosity details coming soon.</p>
    </AppDialog>
  );
}
