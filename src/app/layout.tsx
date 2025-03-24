"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>IBA Construction</title>

        <link rel="icon" href="public/favicon.ico" type="image/x-icon" />
        <link
          rel="shortcut icon"
          href="public/favicon.ico"
          type="image/x-icon"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "IBA Construction",
              url: "https://www.iba-construction.com",
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
