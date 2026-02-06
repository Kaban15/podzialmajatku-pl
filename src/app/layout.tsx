import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Podział Majątku - Pomoc Prawna | podzialmajatku.pl",
  description:
    "Profesjonalna pomoc prawna w sprawach podziału majątku, rozwodów, zniesienia współwłasności i działu spadku. Skontaktuj się z nami.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
