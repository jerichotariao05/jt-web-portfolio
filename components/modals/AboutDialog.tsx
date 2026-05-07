"use client";

import AppDialog from "./AppDialog";
import { usePortfolioStore, selectModalOpen } from "@/store/usePortfolioStore";
import { User } from "lucide-react";

export default function AboutDialog() {
  const open = usePortfolioStore(selectModalOpen("about"));
  const closeModal = usePortfolioStore((state) => state.closeModal);

  return (
    <AppDialog
      open={open}
      onClose={() => closeModal("about")}
      size="large"
      header={
        <h3 className="flex items-center gap-2 text-2xl md:text-3xl font-semibold tracking-tight">
          <User className="size-8" /> About
        </h3>
      }
    >
      <p className="text-muted-foreground text-sm">
        About details coming soon.
      </p>
    </AppDialog>
  );
}
