import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deep Bhanushali | MERN Stack Developer & AI/ML Enthusiast",
  description: "Building intelligent, scalable web applications — from idea to deployment. Portfolio of Deep Bhanushali, a Computer Science Engineer specializing in AI.",
  keywords: ["Deep Bhanushali", "MERN Stack", "AI/ML", "Next.js", "Portfolio", "Full Stack Developer"],
  authors: [{ name: "Deep Bhanushali" }],
  openGraph: {
    title: "Deep Bhanushali | Portfolio",
    description: "Building intelligent, scalable web applications.",
    url: "https://deepbhanushali.com", // Placeholder
    siteName: "Deep Bhanushali Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-[#030712] text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300 overflow-x-hidden`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
