"use client";

import React from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export type AppDialogSize = "compact" | "medium" | "large" | "xlarge" | "full";

const sizeClassName: Record<AppDialogSize, string> = {
  compact: "sm:max-w-sm h-[min(70dvh,420px)]",
  medium: "sm:max-w-lg h-[min(80dvh,560px)]",
  large: "sm:max-w-3xl h-[min(85dvh,680px)]",
  xlarge: "sm:max-w-6xl h-[min(85dvh,800px)]",
  full: "w-full max-w-[calc(100vw-2rem)] sm:max-w-[min(90vw,1763px)] h-[min(90dvh,900px)] sm:rounded-lg",
};

interface AppDialogProps {
  open: boolean;
  onClose: () => void;
  header: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: AppDialogSize;
  contentClassName?: string;
  bodyClassName?: string;
}

export default function AppDialog({
  open,
  onClose,
  header,
  children,
  footer,
  size = "compact",
  contentClassName,
  bodyClassName,
}: AppDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) onClose();
      }}
    >
      <DialogContent
        className={cn(
          "grid-rows-[auto_minmax(0,1fr)_auto]",
          sizeClassName[size],
          contentClassName
        )}
        aria-describedby="dialog-content"
      >
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
        </DialogHeader>
         <ScrollArea className="h-full">
          <div className={cn("min-h-0", bodyClassName)}>{children}</div>
        </ScrollArea>
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
}
