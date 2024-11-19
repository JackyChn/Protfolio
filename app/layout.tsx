import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./_components/ThemeProvider";
import { Toaster } from "react-hot-toast";
import ReactQueryWrapper from "./_components/ui/ReactQueryWrapper";

export const metadata: Metadata = {
  title: "Jacky's Portfolio",
  description: "Personal Portfolio for Jacky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "purple",
              color: "white",
            },
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ReactQueryWrapper>{children}</ReactQueryWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
