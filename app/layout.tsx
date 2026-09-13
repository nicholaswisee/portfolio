import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Navbar";
import { PortfolioPreferencesProvider } from "@/components/PortfolioPreferences";

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

const prepaintThemeScript = `
  document.documentElement.classList.add("js");
  try {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const theme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: prepaintThemeScript }} />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${newsreader.variable} bg-background font-sans text-foreground antialiased`}
      >
        <PortfolioPreferencesProvider>
          <div data-preference-provider="portfolio">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
            >
              Skip to main content
            </a>
            <Nav />
            {children}
          </div>
        </PortfolioPreferencesProvider>
      </body>
    </html>
  );
}
