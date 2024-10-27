import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Taskly AI",
  description: "An AI assistant for tasks",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
