import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/providers/ModalProvider";
import { ThemeQueryProvider } from "@/providers/ThemeQueryProvider";
import ToasterProvider from "@/providers/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased bg-background text-foreground min-h-screen flex flex-col", inter.className)}>
        <ThemeQueryProvider attribute="class" defaultTheme="system" enableSystem>
          <ModalProvider />
          <ToasterProvider />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeQueryProvider>
      </body>
    </html>
  );
}
