import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: "SitePaq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.variable} lang="pt">
      <body className="bg-white text-zinc-50 antialiased">{children}</body>
    </html>
  );
}
