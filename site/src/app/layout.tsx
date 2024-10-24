import './globals.css'
import './atom-one-dark.min.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ParallaxX',
  description:
    'A lightweight, framework-agnostic toolkit for implementing smooth parallax and fade effects that leverage the native ScrollTimeline API.',
}

import { Chivo, Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const chivo = Chivo({ subsets: ['latin'], variable: '--font-chivo' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${chivo.variable} ${inter.variable} bg-dark font-sans antialiased`}>{children}</body>
    </html>
  )
}
