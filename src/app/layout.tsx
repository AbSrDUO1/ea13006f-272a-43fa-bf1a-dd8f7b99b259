import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NimbusFlow",
  description: "Deliver a lightweight SaaS landing single-page with clear value, features, social proof, and a conversion form.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}