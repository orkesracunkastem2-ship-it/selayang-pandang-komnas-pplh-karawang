import type { Metadata } from "next";
import "./globals.css";
import SWUpdater from "../components/SWUpdater";

export const metadata: Metadata = {
  title: "Selayang Pandang — DPD Komnas PPLH Karawang",
  description: "Video dokumenter selayang pandang — Karawang dalam Darurat Sampah. DPD Komnas PPLH Karawang 2026.",
  manifest: "/manifest.json",
  themeColor: "#0b1326",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ background: 'var(--bg)', color: 'var(--on-surface)', minHeight: '100vh' }}>
        <SWUpdater />
        {children}
      </body>
    </html>
  );
}