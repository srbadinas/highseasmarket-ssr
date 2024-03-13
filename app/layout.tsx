import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "HighSeasMarket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}