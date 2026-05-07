"use client";

import React from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export type AppDialogSize = "compact" | "medium" | "large" | "xlarge" | "full";

const sizeClassName: Record<AppDialogSize, string> = {
  compact: "sm:max-w-sm",
  medium: "sm:max-w-lg",
  large: "sm:max-w-3xl",
  xlarge: "sm:max-w-6xl",
  full: "w-full max-w-[calc(100vw-2rem)] sm:max-w-[min(90vw,1763px)] max-h-[min(90dvh,900px)] sm:rounded-lg",
};

interface AppDialogProps {
  open: boolean;
  onClose: () => void;
  header: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: AppDialogSize;
  contentClassName?: string;
}

export default function AppDialog({
  open,
  onClose,
  header,
  children,
  footer,
  size = "compact",
  contentClassName,
}: AppDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) onClose();
      }}
    >
      <DialogContent className={cn(sizeClassName[size], contentClassName)}>
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
        </DialogHeader>
        {children}
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
}
