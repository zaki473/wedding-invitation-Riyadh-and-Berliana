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
  title: "Wedding Invitation | Berliana Radhini & Muhammad Riyadh",
  description: "The Wedding of Berliana & Riyadh",

  openGraph: {
    title: "Wedding Invitation |  Berliana Radhini & Muhammad Riyadh",
    description: "The Wedding of Berliana & Riyadh",
    url: "https://wedding-invitation-riyadh-and-berli-six.vercel.app",
    siteName: "Wedding Invitation",
    images: [
      {
        url: "https://wedding-invitation-riyadh-and-berli-six.vercel.app/kolase-tengah.webp",
        width: 1200,
        height: 630,
        alt: "Undangan Pernikahan Berli & Riyadh", // Tambahkan ini
        type: "image/webp", // Tambahkan ini agar browser mobile yakin itu gambar
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: [
      "https://wedding-invitation-riyadh-and-berli-six.vercel.app/kolase-tengah.webp",
    ],
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
