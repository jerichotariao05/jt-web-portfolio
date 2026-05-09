import RadarRing from "@/components/RadarRing";

export default function page() {
  return (
    <main className="bg-gray-100/60 dark:bg-gray-800/20 relative flex w-full min-h-dvh items-center justify-center overflow-hidden sm:overflow-visible">
      <RadarRing
        size={620}
        className="border-gray-400/35 shadow-gray-400/20 dark:border-gray-500/20 dark:shadow-gray-500/15"
      />
      <RadarRing
        size={1020}
        className="border-gray-400/35 shadow-gray-400/20 dark:border-gray-500/20 dark:shadow-gray-500/15"
      />
      <RadarRing
        size={1440}
        className="border-gray-400/35 shadow-gray-400/20 dark:border-gray-500/20 dark:shadow-gray-500/15"
      />
      <RadarRing
        size={1460}
        variant="outline"
        className="border-gray-500/45 dark:border-gray-400/25"
      />
      <div className="relative max-w-xl flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold tracking-tight">
          Page Under Maintenance
        </h1>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-8">
          I&apos;m making some updates to the website. Thanks for your patience,
          please visit again soon.
        </h3>
      </div>
    </main>
  );
}
