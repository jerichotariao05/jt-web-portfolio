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
import { ScrollArea } from "@/components/ui/scroll-area";

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
      <div className="h-full min-h-0 flex flex-col p-2">
        <p className="text-sm text-muted-foreground leading-relaxed pr-4 mb-5">
          Optional signals, inspirations, and things beyond the main interface.
        </p>
        <ScrollArea className="flex-1 min-h-0 pr-4">
          <Accordion
            type="single"
            collapsible
            defaultValue="inspiration"
            className="w-full p-2"
          >
            <AccordionItem value="inspiration">
              <AccordionTrigger>
                Where did the idea for this website come from?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  I came across a portfolio concept on YouTube that used a space
                  theme, with rings and stars. I liked the idea enough that I
                  wanted to expand on it and make it feel more intentional. The
                  radar concept felt closer, you become the source of the
                  signal, and everything on the screen reflects what you have
                  built, the tools you use, and the ways people can reach you.
                  The core idea stays the same, the design now feels more
                  intentional and meaningful, not just visually cool.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <a
                    href="https://youtu.be/ELssXP1sTC8?si=5l-T2O3GFGAHMlx7"
                    className="underline cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click or tap this link to see the portfolio concept.
                  </a>
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="hobbies">
              <AccordionTrigger>
                What do I do outside development?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  I enjoy a mix of different hobbies. Gaming, especially games
                  I grew up with like Pokémon ORAS and Sun and Moon, that was
                  before, now is ML. I also like listening to music, watching
                  anime, and keeping up with TV series that catch my interest.
                </p>
                <p>
                  Outside of that, I enjoy drawing and doing creative casually,
                  even if I would not really call myself an artist. I also like
                  exploring the tech community and diving into new tools,
                  frameworks, or ideas whenever something interesting catches
                  my attention. A lot of the time, that curiosity ends up
                  connecting back to development in one way or another.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="tech-stack">
              <AccordionTrigger>
                Tech stack behind the interface
              </AccordionTrigger>
              <AccordionContent>
                Next.js with the App Router, TypeScript, Tailwind CSS, shadcn/ui
                for reusable UI components, Zustand for state management across
                the node interactions and modals, and Lucide for icons.
                It&apos;s a React app with an interface that looks like a radar.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="motivation">
              <AccordionTrigger>What keeps me building?</AccordionTrigger>
              <AccordionContent>
                Mostly the learning cycle. There is always something I do not
                know yet, and the moment I figure it out and apply it to
                something real is what keeps me coming back.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="traits">
              <AccordionTrigger>
                How would I describe my work style?
              </AccordionTrigger>
              <AccordionContent>
                I tend to look at the bigger picture before starting a task.
                Because of that, I usually spend time researching, exploring,
                and asking questions first so I can fully understand what
                something is supposed to do and why it matters. Once I have
                that clarity, I approach the work more carefully and
                intentionally. Combining research with planning helps me
                produce better results instead of just focusing on getting
                something to work.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ScrollArea>
      </div>
    </AppDialog>
  );
}
