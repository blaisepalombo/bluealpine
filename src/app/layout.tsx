import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEO & AI Visibility Strategy",
  description:
    "Research and observations on how businesses can improve visibility across search engines and AI-powered discovery platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}