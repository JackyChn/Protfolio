import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./_components/ThemeProvider";

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
      <body>
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
