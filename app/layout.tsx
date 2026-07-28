import type { Metadata } from "next"
import { Archivo_Black, IBM_Plex_Mono, Manrope } from "next/font/google"
import "./globals.css"

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
})

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://shahdadk.com"),
  title: "Shahdad Kompani — Founder & Engineer",
  description:
    "Founder and engineer building Appfi, shipping software products, and studying engineering at the University of Waterloo.",
  openGraph: {
    title: "Shahdad Kompani — Founder & Engineer",
    description: "I build useful software. Unreasonably fast.",
    url: "https://shahdadk.com",
    siteName: "Shahdad Kompani",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Shahdad Kompani — Founder & Engineer",
    description: "I build useful software. Unreasonably fast.",
  },
  icons: {
    icon: "/TopImage.png",
    apple: "/TopImage.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>{children}</body>
    </html>
  )
}
