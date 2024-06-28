import '@/app/_Components/theme.css'
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import { Toaster } from "@/components/ui/sonner";
import ToggleThemeProvider from './_Components/ToggleThemeProvider';
// import { metadata } from './metadata';
import type { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = metadata;
export const metadata: Metadata = {
  title: "Slate Flow",
  description: " ",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} transition-colors duration-200`}>
        <ConvexClientProvider>
          <ToggleThemeProvider>
            {children}
          </ToggleThemeProvider>
          <Toaster />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
