"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "jt-website-portfolio.fade-intro-once";

export function useFadeAnimation() {
  const pathname = usePathname();

  useEffect(() => {
    const DELAY_BETWEEN_ANIMATIONS = 100;
    let animationCounter = 0;

    const selectors = [
      '[class*=" intersect:"]',
      '[class*=":intersect:"]',
      '[class^="intersect:"]',
      '[class="intersect"]',
      '[class*=" intersect "]',
      '[class^="intersect "]',
      '[class$=" intersect"]',
    ];

    const getThreshold = (el: HTMLElement) => {
      if (el.classList.contains("intersect-full")) return 0.99;
      if (el.classList.contains("intersect-half")) return 0.5;
      if (el.classList.contains("intersect-quarter")) return 0.25;
      return 0;
    };

    const thresholdMap = new WeakMap<HTMLElement, number>();

    let skipStored = false;
    try {
      skipStored =
        typeof window !== "undefined" &&
        window.sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      skipStored = false;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selectors.join(","))
    );

    if (skipStored) {
      elements.forEach((el) => {
        el.removeAttribute("no-intersect");
        el.style.animationDelay = "";
        el.style.transitionDelay = "";
      });
      return;
    }

    /** After any intro element has played once, skip on later navigations (same tab). */
    const markIntroSeenIfOnce = (target: HTMLElement) => {
      if (!target.classList.contains("intersect-once")) return;
      try {
        window.sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore quota / privacy mode
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          requestAnimationFrame(() => {
            const target = entry.target as HTMLElement;
            const threshold = thresholdMap.get(target) ?? 0;

            if (target.classList.contains("intersect-no-queue")) {
              if (entry.isIntersecting) {
                target.removeAttribute("no-intersect");
                markIntroSeenIfOnce(target);
                if (target.classList.contains("intersect-once")) {
                  observer.unobserve(target);
                }
              } else if (!target.classList.contains("intersect-once")) {
                target.setAttribute("no-intersect", "");
              }
              return;
            }

            if (entry.intersectionRatio >= threshold) {
              if (!target.hasAttribute("data-animated")) {
                target.removeAttribute("no-intersect");
                target.setAttribute("data-animated", "true");
                markIntroSeenIfOnce(target);

                const delay =
                  animationCounter * DELAY_BETWEEN_ANIMATIONS;
                animationCounter++;
                target.style.animationDelay = `${delay}ms`;
                target.style.transitionDelay = `${delay}ms`;

                if (target.classList.contains("intersect-once")) {
                  observer.unobserve(target);
                }
              }
            } else if (!target.classList.contains("intersect-once")) {
              target.setAttribute("no-intersect", "");
              target.removeAttribute("data-animated");
              target.style.animationDelay = "";
              target.style.transitionDelay = "";
              animationCounter = 0;
            }
          });
        });
      },
      { threshold: [0, 0.25, 0.5, 0.99] }
    );

    elements.forEach((el) => {
      el.setAttribute("no-intersect", "");
      thresholdMap.set(el, getThreshold(el));
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);
}
