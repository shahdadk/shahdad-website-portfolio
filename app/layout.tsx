import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shahdad Kompani | Portfolio",
  description: "iOS & full-stack engineer building things people actually use.",
  icons: {
    icon: [
      {
        url: "app/TopImage.png",   // served from /public/TopImage.png
        type: "image/png",
        sizes: "500x500",       // valid, but see notes below
      },
    ],
    apple: "app/TopImage.png",     // optional iOS icon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
