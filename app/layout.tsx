import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FadeAnimationInit } from "@/components/FadeAnimationInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jericho Joshua Tariao | Software Developer",
    template: "%s | Jericho Joshua Tariao",
  },
  description:
    "Interactive radar-style portfolio by Jericho Joshua Tariao: software development, projects, technical skills, and contact. Built with Next.js, React, and TypeScript.",
  keywords: [
    "Jericho Joshua Tariao",
    "Software Developer",
    "Web Developer",
    "Frontend",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Jericho Joshua Tariao" }],
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "/",
    siteName: "Jericho Joshua Tariao",
    title: "Jericho Joshua Tariao | Software Developer",
    description:
      "Interactive radar-themed portfolio showcasing projects, technical skills, and contact information.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jericho Joshua Tariao portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jericho Joshua Tariao | Software Developer",
    description:
      "Interactive radar-themed portfolio showcasing projects, technical skills, and contact information.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="h-screen overflow-hidden bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <FadeAnimationInit />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
