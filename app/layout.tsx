import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Great_Vibes } from "next/font/google";
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
  title: "Wedding Invitation | Muhammad Riyadh & Berliana Radhini",
  description: "The Wedding of Riyadh & Berliana",

  openGraph: {
    title: "Wedding Invitation | Muhammad Riyadh & Berliana Radhini",
    description: "The Wedding of Riyadh & Berliana",
    url: "https://wedding-invitation-riyadh-and-berli-six.vercel.app",
    siteName: "Wedding Invitation",
    images: [
      {
        url: "https://wedding-invitation-riyadh-and-berli-six.vercel.app/depanbiru.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: [
      "https://wedding-invitation-riyadh-and-berli-six.vercel.app/depanbiru.jpeg",
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