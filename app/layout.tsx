import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Shahdad Kompani | Portfolio",
  description: "iOS & full-stack engineer building things people actually use.",
  icons: {
    icon: "public/TopImage.png",
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
