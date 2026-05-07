"use client";

import AppDialog from "./AppDialog";
import { usePortfolioStore, selectModalOpen } from "@/store/usePortfolioStore";
import { User } from "lucide-react";

export default function AboutDialog() {
  const open = usePortfolioStore(selectModalOpen("about"));
  const closeModal = usePortfolioStore((state) => state.closeModal);

  return (
    <AppDialog
      size="xlarge"
      open={open}
      onClose={() => closeModal("about")}
      header={
        <span className="flex items-center gap-2">
          <User className="size-5" /> About
        </span>
      }
    >
      <p className="text-muted-foreground text-sm">
        About details coming soon.
      </p>
    </AppDialog>
  );
}
