import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/providers/ModalProvider";
import { ThemeQueryProvider } from "@/providers/ThemeQueryProvider";
import ToasterProvider from "@/providers/ToastProvider";
import { Analytics } from "@vercel/analytics/react";
import config from "@/config/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: config.title,
  description: config.description,
  openGraph: {
    title: config.title,
    description: config.description,
    url: config.siteUrl,
    type: "website",
    images: [
      {
        url: `${config.siteUrl}/cover-pic.jpg`,
        width: 1200,
        height: 630,
      },
    ],
  },
  other: {
    "google-site-verification": "", // Google Search Console Verification
  },
  // manifest: "manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased bg-background text-foreground min-h-screen flex flex-col", inter.className)}>
        <ThemeQueryProvider attribute="class" defaultTheme="system" enableSystem>
          <ModalProvider />
          <ToasterProvider />
          <Nav />

          <main className="flex-1 container max-w-6xl">{children}</main>

          <Analytics />
          <Footer />
        </ThemeQueryProvider>
      </body>
    </html>
  );
}
