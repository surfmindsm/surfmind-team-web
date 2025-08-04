import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Surfmind - Digital Innovation Studio",
  description: "Surfmind is a digital innovation studio building modern web and mobile applications with cutting-edge technologies.",
  keywords: ["surfmind", "web development", "mobile apps", "AI integration", "digital innovation"],
  authors: [{ name: "Surfmind Team" }],
  creator: "Surfmind",
  publisher: "Surfmind",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Surfmind - Digital Innovation Studio",
    description: "Surfmind is a digital innovation studio building modern web and mobile applications with cutting-edge technologies.",
    url: "https://surfmind-team.com",
    siteName: "Surfmind",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Surfmind - Digital Innovation Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surfmind - Digital Innovation Studio",
    description: "Surfmind is a digital innovation studio building modern web and mobile applications with cutting-edge technologies.",
    images: ["/og-image.png"],
    creator: "@surfmind",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
