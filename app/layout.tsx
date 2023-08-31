import "./globals.css";
import type { Metadata } from "next";
import RainbowProvider from "./Providers/rainbow-provider";

export const metadata: Metadata = {
  title: "danglydoodads",
  description:
    "We don't need no schtinkin' plan. We don't want no farckin' leader. We justa buncha nuts hangin' out and havin' a ball on a multi-dimensional playground™.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <RainbowProvider>{children}</RainbowProvider>
      </body>
    </html>
  );
}
