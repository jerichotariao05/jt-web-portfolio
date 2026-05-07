"use client";

import AppDialog from "./AppDialog";
import { usePortfolioStore, selectModalOpen } from "@/store/usePortfolioStore";
import { FileQuestionMark } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CuriosityDialog() {
  const open = usePortfolioStore(selectModalOpen("curiosity"));
  const closeModal = usePortfolioStore((state) => state.closeModal);

  return (
    <AppDialog
      open={open}
      onClose={() => closeModal("curiosity")}
      size="medium"
      header={
        <div className="flex items-center gap-2">
          <FileQuestionMark className="size-8" />
          <h2 className="flex items-center gap-2 text-3xl md:text-4xl font-semibold tracking-tight">
            ???
          </h2>
        </div>
      }
    >
      <p className="text-sm text-muted-foreground leading-relaxed pr-4 mb-5">
        Optional signals, inspirations, and things beyond the main interface.
      </p>
      <Accordion
        type="single"
        collapsible
        defaultValue="inspiration"
        className="w-full"
      >
        <AccordionItem value="inspiration">
          <AccordionTrigger>
            Where did the idea for this website come from?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            deleniti voluptatem, iste, numquam consequuntur blanditiis nulla
            expedita veritatis quam veniam nemo quibusdam repudiandae provident
            quae dolor quasi qui fuga quia.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="tech-stack">
          <AccordionTrigger>Tech stack behind the interface</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            deleniti voluptatem, iste, numquam consequuntur blanditiis nulla
            expedita veritatis quam veniam nemo quibusdam repudiandae provident
            quae dolor quasi qui fuga quia.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="hobbies">
          <AccordionTrigger>What do I do outside development?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            deleniti voluptatem, iste, numquam consequuntur blanditiis nulla
            expedita veritatis quam veniam nemo quibusdam repudiandae provident
            quae dolor quasi qui fuga quia.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="motivation">
          <AccordionTrigger>What keeps me building?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            deleniti voluptatem, iste, numquam consequuntur blanditiis nulla
            expedita veritatis quam veniam nemo quibusdam repudiandae provident
            quae dolor quasi qui fuga quia.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="traits">
          <AccordionTrigger>
            How would I describe my work style?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            deleniti voluptatem, iste, numquam consequuntur blanditiis nulla
            expedita veritatis quam veniam nemo quibusdam repudiandae provident
            quae dolor quasi qui fuga quia.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </AppDialog>
  );
}
