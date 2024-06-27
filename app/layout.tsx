"use client"
import '@/app/_Components/theme.css'
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState, useEffect } from 'react';
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import { Toaster } from "@/components/ui/sonner";
import Toggle from "./_Components/Toggle";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Slate Flow",
//   description: " ",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <body className={`${inter.className} transition-colors duration-200`}>
        <ConvexClientProvider>
          <label className="switch fixed bottom-4 right-4 p-2 bg-gray-800 text-white rounded-full focus:outline-none z-50">
            <input type="checkbox" onClick={toggleDarkMode} />
            <span className="slider"></span>
          </label>
          {children}
          <Toaster />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
