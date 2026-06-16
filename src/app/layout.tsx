import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Balaji Architect | Smart Design. Quality Construction.",
  description:
    "End-to-end architectural and construction solutions — from 2D house plans to turnkey delivery. Vastu-compliant, modern designs in Kushinagar, UP.",
  keywords: [
    "architect",
    "construction",
    "house plan",
    "3D elevation",
    "interior design",
    "Kushinagar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
