import "./globals.css";
import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FilmGrain, ScrollProgress } from "@/components/motion";
import { buildMetadata, OrgJsonLd } from "@/components/SEOHead";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}
    >
      <body className="bg-bg text-ink antialiased">
        <OrgJsonLd />
        <ScrollProgress />
        <FilmGrain />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
