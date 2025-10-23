import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export const metadata: Metadata = {
  title: "Leona Josephine - Portfolio",
  description: "Creative Developer & Designer",
};
  
export default function RootLayout({
  children,
  }: {
  children: React.ReactNode;
  }) {
  return (
  <html lang="en" suppressHydrationWarning>
  <body>
  {/* Theme Switcher (fixed) */}
  <ThemeSwitcher />
  {children}
  </body>
  </html>
  );
  }