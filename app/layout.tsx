import { relative } from "path";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "car Hub",
  description: "Discover the best car in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}
