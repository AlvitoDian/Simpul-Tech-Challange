import type { Metadata } from "next";
import { Lato } from "next/font/google"; // Ganti dengan Lato
import "./globals.css";
import Head from "next/head";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quicks",
  description: "Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <body className={lato.className}>{children}</body>
    </html>
  );
}
