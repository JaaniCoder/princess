import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://khyati-my-princess.vercel.app"),
  title: "For My Princess, Khyati 👑",
  description: "Happy National Princess Day to my everything. You are the center of my universe. - Jaani",
  openGraph: {
    title: "Happy National Princess Day, Khyati 👑",
    description: "A special surprise for the center of my universe. 💖",
    url: "https://khyati-my-princess.vercel.app",
    siteName: "Princess Day Surprise",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1000,
        height: 630,
        type: "image/jpeg",
        alt: "Happy National Princess Day, Khyati",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy National Princess Day, Khyati 👑",
    description: "A special surprise for my princess. 💖",
    images: ["/og-image.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}