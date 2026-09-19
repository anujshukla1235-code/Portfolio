import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Vrittant - Portfolio",
  description: "Personal Portfolio and Technical Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script defer data-domain="vrittant.dev" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-[#0a0a0a] dark:text-zinc-50 selection:bg-blue-200 dark:selection:bg-blue-900">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow max-w-6xl mx-auto w-full px-6 lg:px-8 py-12">
            {children}
          </main>
          {/* TODO: Add Footer */}
        </ThemeProvider>
      </body>
    </html>
  );
}
