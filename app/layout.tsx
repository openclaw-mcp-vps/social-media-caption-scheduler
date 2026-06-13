import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CaptionAI — Generate & Schedule Social Media Captions",
  description: "AI generates platform-specific captions, schedules posts across multiple platforms, tracks engagement, and suggests optimal posting times."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0802fd83-cf9e-45b7-9034-9d652044175e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
