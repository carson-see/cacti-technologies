import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cacti Technologies | Enterprise-Grade Tech for Local Business",
  description:
    "Grand Rapids tech agency specializing in web design, local SEO, AI automations, and tech rescue for small businesses. Fortune 500 experience, Main Street focus.",
  keywords: [
    "Grand Rapids web design",
    "local SEO Michigan",
    "AI automations small business",
    "tech rescue",
    "Cacti Technologies",
  ],
  openGraph: {
    title: "Cacti Technologies | Enterprise-Grade Tech for Local Business",
    description:
      "Grand Rapids tech agency: web design, local SEO, AI automations, and tech rescue.",
    url: "https://cactitechnologies.com",
    siteName: "Cacti Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
