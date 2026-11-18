import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "For My Princess, Khyati 👑",
  description: "Happy National Princess Day to my everything. You are the center of my universe. - Jaani",
  // The 'icons' block has been removed since app/icon.tsx handles it automatically
  openGraph: {
    title: "Happy National Princess Day, Khyati 👑",
    description: "A special surprise for the center of my universe. 💖",
    url: "https://khyati-my-princess.vercel.app", 
    siteName: "Princess Day Surprise",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
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
    images: ["/og-image.jpg"],
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