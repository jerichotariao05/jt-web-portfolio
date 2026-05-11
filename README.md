# Jericho Joshua Tariao — Portfolio

A single-page portfolio with a **radar-style interface**. You sit at the center; projects, skills, contact, and extras appear as nodes you can explore through modals instead of long vertical scrolling.

**Live Site:** [View portfolio](https://jerichotariao.vercel.app/)

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (Radix primitives)
- [Zustand](https://zustand-demo.pmnd.rs) — modal and UI state
- [Lucide React](https://lucide.dev) — icons
- [next-themes](https://github.com/pacocoursey/next-themes) — light / dark mode

## Project structure

```
jt-website-portfolio/
├── app/
│   ├── layout.tsx          # fonts, metadata (SEO / Open Graph), theme providers
│   ├── page.tsx             # radar landing, nodes, speed dial, dialogs
│   ├── globals.css
│   ├── not-found.tsx
│   └── maintenance/
├── components/
│   ├── modals/             # About, Projects, Skills, Contact, Curiosity, shared AppDialog
│   ├── ui/                 # shadcn components (dialog, carousel, tabs, etc.)
│   ├── RadarField.tsx      # positions nodes on the radar
│   ├── RadarRing.tsx       # concentric rings
│   ├── RadarPageSweep.tsx  # page-level sweep animation
│   ├── Nodes.tsx           # circular node buttons + optional profile image
│   ├── ProjectCard.tsx     # project teaser cards
│   ├── SpeedDial.tsx       # mobile FAB menu
│   ├── Heading.tsx         # name, role, desktop hint
│   └── ...
├── hooks/                   # e.g. fade / animation helpers
├── lib/
│   ├── data.tsx            # projects, skills content
│   └── utils.ts
├── public/
│   ├── images/             # profile, project assets, blank_profile / no_image fallbacks
│   ├── Resume.pdf
│   └── og-image.png        # add a 1200×630 image for social previews (see below)
└── store/
    └── usePortfolioStore.ts
```

## Getting started

Requires **Node.js 18+** (or the version your Next.js release recommends).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

- `npm run build` — production build
- `npm run start` — run production server locally
- `npm run lint` — ESLint

## Features (implementation notes)

- **Accessible nodes** — Radar `Nodes` use a real `button` when clickable, with labels and keyboard focus styles.
- **Image fallbacks** — `public/images/blank_profile.webp` (profile hover) and `no_image.webp` (broken project thumbnails / screenshots) swap in on `onError`.
- **Dialogs** — Built on Radix Dialog; content scrolls inside `AppDialog` where needed.
- **Theming** — System / light / dark via `ThemeProvider` on the root layout.

## License

Personal portfolio — © Jericho Joshua Tariao. All rights reserved.
