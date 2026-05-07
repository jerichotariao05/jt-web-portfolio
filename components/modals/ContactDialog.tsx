"use client";

import AppDialog from "./AppDialog";
import { usePortfolioStore, selectModalOpen } from "@/store/usePortfolioStore";
import { Send } from "lucide-react";

export default function ContactDialog() {
  const open = usePortfolioStore(selectModalOpen("contact"));
  const closeModal = usePortfolioStore((state) => state.closeModal);

  return (
    <AppDialog
      open={open}
      onClose={() => closeModal("contact")}
      size="large"
      header={
        <h3 className="flex items-center gap-2 text-2xl md:text-3xl font-semibold tracking-tight">
          <Send className="size-8" /> Contact
        </h3>
      }
    >
      <p className="text-muted-foreground text-sm">
        Contact details coming soon.
      </p>
    </AppDialog>
  );
}
