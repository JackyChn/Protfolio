import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacky's Protfolio",
  description: "Personal Protfolio for Jacky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
