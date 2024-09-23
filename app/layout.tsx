import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatGPT Clone",
  description: "ChatGPT Clone website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <link
        rel="icon"
        href="https://cdn.oaistatic.com/_next/static/media/favicon-16x16.9b8dbb69.png"
      />
    </html>
  );
}
