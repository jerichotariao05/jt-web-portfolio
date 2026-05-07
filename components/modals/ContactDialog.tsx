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
      header={
        <span className="flex items-center gap-2">
          <Send className="size-5" /> Contact
        </span>
      }
    >
      <p className="text-muted-foreground text-sm">Contact details coming soon.</p>
    </AppDialog>
  );
}
