import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

// Update the title and description
export const metadata: Metadata = {
  title: "BCN PEG Suite",
  description: "Connecting global teams with expert solutions from our PEG Suite",
  icons: { icon: "/Icons/Bain/Bain-icon.png"}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'