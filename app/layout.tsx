import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  /* Updated metadata for corporate wellbeing platform */
  title: "VitalWork - Corporate Wellbeing Platform",
  description:
    "Digitale Gesundheitslösungen für Unternehmen. Steigern Sie Mitarbeiterproduktivität und -zufriedenheit mit unserer B2B Wellbeing-Plattform.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    /* Updated language to German */
    <html lang="de">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
