import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Great_Vibes,
} from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Font Serif (elegan)
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

// Font script (estetik)
const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  // 1. Tambahkan baris ini (Ganti URL-nya dengan URL Vercel Anda)
  metadataBase: new URL('https://wedding-invitation-riyadh-and-berli-six.vercel.app'),

  title: "Wedding Invitation | Berliana Radhini & Muhammad Riyadh",
  description: "The Wedding of Berliana & Riyadh",

  openGraph: {
    title: "Wedding Invitation | Berliana Radhini & Muhammad Riyadh",
    description: "The Wedding of Berliana & Riyadh",
    url: "/", // Biarkan "/" saja karena sudah ada metadataBase di atas
    siteName: "Wedding Invitation",
    images: [
      {
        url: "/kolase-tengah_12.jpg", // Pakai .jpg yang baru
        width: 1200,
        height: 630,
        alt: "Undangan Pernikahan Berli & Riyadh",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/kolase-tengah_12.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${playfair.variable} 
          ${greatVibes.variable} 
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
