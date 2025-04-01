import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IBA Construction",
  description:
    "IBA Construction is a licensed general contractor in San Diego, specializing in new construction, remodeling, and water damage repairs.",
  keywords: [
    "IBA Construction",
    "General Contractor",
    "San Diego",
    "Remodeling",
    "New Construction",
    "Additions",
    "Home Renovations",
  ],
  authors: [{ name: "IBA Construction", url: "https://ibaconstruction.com" }],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "IBA Construction",
    description: "Top-rated general contractor based in San Diego, CA.",
    url: "https://ibaconstruction.com",
    siteName: "IBA Construction",
    images: [
      {
        url: "/assets/house.jpg",
        width: 1200,
        height: 630,
        alt: "IBA Construction Project",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-title" content="IBA Construction" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
