import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";

const sofiaProSoft = localFont({
  src: [
    {
      path: "../public/fonts/SofiaProSoftLight.woff",
      weight: "300",
    },
    {
      path: "../public/fonts/SofiaProSoftLight-italic.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/SofiaProSoftRegular.woff",
      weight: "400",
    },
    {
      path: "../public/fonts/SofiaProSoftRegular-Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/SofiaProSoftMedium.woff",
      weight: "500",
    },
    {
      path: "../public/fonts/SofiaProSoftMedium-italic.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/SofiaProSoftBold.woff",
      weight: "700",
    },
    {
      path: "../public/fonts/SofiaProSoftBold-italic.woff",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-sofia-pro-soft",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${sofiaProSoft.variable}`}>{children}</body>
    </html>
  );
}
