import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cormorant = localFont({
  variable: "--font-cormorant",
  display: "swap",
  src: [
    {
      path: "../public/fonts/cormorant-300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/cormorant-300-italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/cormorant-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/cormorant-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/cormorant-500.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

const jost = localFont({
  variable: "--font-jost",
  display: "swap",
  src: [
    {
      path: "../public/fonts/jost-300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/jost-400.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Fable & Founder — Premium Storytelling & Preservation",
  description:
    "Fable & Founder captures the life stories of ordinary people and delivers them as physical heirloom artifacts: a bound book, a memory coin, and a private digital vault.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
