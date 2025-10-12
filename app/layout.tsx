import type React from 'react'
import type { Metadata } from 'next'
import { Afacad, Bodoni_Moda } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'

const afacad = Afacad({
  subsets: ['latin'],
  variable: '--font-afacad',
  display: 'swap',
})

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'StyleMe - Your AI Fashion Assistant',
  description: 'Your Wardrobe. Your Vibe. Perfectly Styled.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`font-sans ${afacad.variable} ${bodoniModa.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}
