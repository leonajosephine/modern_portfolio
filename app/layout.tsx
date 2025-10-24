import type { Metadata } from "next";
import "./globals.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import SmoothScroll from "@/components/SmoothScroll";

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
  {/* Smooth inertial scroll (Lenis) */}
  <SmoothScroll />
  {children}
  </body>
  </html>
  );
  }