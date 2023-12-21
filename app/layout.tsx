import { Inter } from 'next/font/google'
import './ui/globals.css'
import React from 'react'
import TranstackProvider from './providers/TranstackProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Admin Dashboard',
  description: 'Next.js Tutorial',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TranstackProvider> <div>{children}</div></TranstackProvider>
      </body>
    </html>
  )
}
