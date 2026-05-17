import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Selayang Pandang — DPD Komnas PPLH Karawang",
  description: "Video dokumenter selayang pandang — Karawang dalam Darurat Sampah. DPD Komnas PPLH Karawang 2026.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body style={{ background: 'var(--bg)', color: 'var(--on-surface)', minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  );
}
