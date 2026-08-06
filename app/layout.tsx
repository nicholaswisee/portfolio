import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Nicholas Wise — Engineer, Researcher, and Builder",
  description:
    "Software work, systems and algorithms research, and experiences from Nicholas Wise Saragih Sumbayak.",
  openGraph: {
    title: "Nicholas Wise — Engineer, Researcher, and Builder",
    description:
      "Software work, systems and algorithms research, and experiences from Nicholas Wise Saragih Sumbayak.",
    type: "website",
    images: ["/profile.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${newsreader.variable} font-sans antialiased bg-archive-ink text-paper-mist`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-oxidized-teal focus:px-4 focus:py-2 focus:text-archive-ink"
        >
          Skip to main content
        </a>
        <Nav />
        {children}
      </body>
    </html>
  );
}
