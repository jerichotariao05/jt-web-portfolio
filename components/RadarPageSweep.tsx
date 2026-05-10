"use client";

import { useEffect, useState } from "react";

const SWEEP_DURATION_MS = 3200;
const SWEEP_INTERVAL_MS = 30000;

export default function RadarPageSweep() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const triggerSweep = () => {
      setActive(true);
      setTimeout(() => setActive(false), SWEEP_DURATION_MS + 100);
    };

    // First sweep shortly after mount
    const initial = setTimeout(triggerSweep, 1200);
    const interval = setInterval(triggerSweep, SWEEP_INTERVAL_MS);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute left-1/2 top-[45%] lg:top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "250vmax",
          height: "250vmax",
          opacity: 0,
          animation: active
            ? `radar-page-sweep ${SWEEP_DURATION_MS}ms linear forwards`
            : "none",
          background: `conic-gradient(
            from 0deg at center,
            transparent 0deg,
            transparent 265deg,
            color-mix(in srgb, var(--primary) 2%, transparent) 295deg,
            color-mix(in srgb, var(--primary) 8%, transparent) 335deg,
            color-mix(in srgb, var(--primary) 22%, transparent) 352deg,
            color-mix(in srgb, var(--primary) 45%, transparent) 358deg,
            color-mix(in srgb, var(--primary) 55%, transparent) 360deg
          )`,
        }}
      />
    </div>
  );
}
