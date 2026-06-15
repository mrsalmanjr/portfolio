import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  title: "SALMAN KOTABAL | Software Developer",
  description: "MCA Student | Software Developer | AI & Cloud Enthusiast",
  keywords: "Salman Kotabal, MCA, Software Developer, Python, AI, Cloud, OCI, React, Warehouse Management System, Worthsolving",
  authors: [{ name: "Salman Kotabal" }],
  creator: "Salman Kotabal",
  publisher: "Salman Kotabal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Salman Kotabal - Software Developer",
    description: "MCA Student | Software Developer | AI & Cloud Enthusiast",
    url: "https://mohitvirli.github.io",
    siteName: "Salman Kotabal's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salman Kotabal - Software Developer",
    description: "MCA Student | Software Developer | AI & Cloud Enthusiast",
  },
  verification: {
    google: "GsRYY-ivL0F_VKkfs5KAeToliqz0gCrRAJKKmFkAxBA",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={'G-7WD4HM3XRE'} />
    </html>
  );
}
