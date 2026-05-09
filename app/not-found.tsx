import RadarRing from "@/components/RadarRing";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-zinc-100 dark:bg-yellow-800/20 relative flex w-full min-h-dvh items-center justify-center overflow-hidden sm:overflow-visible">
      <RadarRing
        size={620}
        className="border-gray-300/50 shadow-gray-300/30 dark:border-yellow-300/10 dark:shadow-yellow-300/10"
      />
      <RadarRing
        size={1020}
        className="border-gray-300/50 shadow-gray-300/30 dark:border-yellow-300/10 dark:shadow-yellow-300/10"
      />
      <RadarRing
        size={1440}
        className="border-gray-300/50 shadow-gray-300/30 dark:border-yellow-300/10 dark:shadow-yellow-300/10"
      />
      <RadarRing
        size={1460}
        variant="outline"
        className="border-gray-400/30 dark:border-yellow-300/20"
      />
      <div className="relative flex flex-col gap-2 items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold tracking-tight">
          404: Page not found
        </h1>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-8">
          We can&apos;t seem to find the page you&apos;re looking for.
        </h3>
        <Link href="/">
          <Button
            variant="outline"
            size="icon-lg"
            className="w-fit text-foreground px-4 rounded-full"
          >
            <ArrowLeftIcon className="size-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
