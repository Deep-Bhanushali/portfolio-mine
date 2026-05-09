"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { CursorTracker } from "./CursorTracker";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <CursorTracker />
      {children}
    </ThemeProvider>
  );
}
