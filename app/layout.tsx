import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "30 BDay",
  description: "Mariana y Diana ya estan viejas y cumplen 30. :]",
  openGraph: {
    images: [
      {
        url: "/bd-invite/mlp.png",
        width: 700,
        height: 600,
      },
      {
        url: "/bd-invite/mlp-sm.png",
        width: 500,
        height: 400,
      },
    ]
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
