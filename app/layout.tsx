import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RainbowProvider from "./Providers/rainbow-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "danglydoodads",
  description: "danglydoodads",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <RainbowProvider>{children}</RainbowProvider>
      </body>
    </html>
  );
}
