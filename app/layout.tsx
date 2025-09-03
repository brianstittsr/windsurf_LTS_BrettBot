import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CustomGreeting from './components/CustomGreeting'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LTS BrettBot - Manufacturing Solutions Assistant',
  description: 'Get expert guidance from Brett on LTS manufacturing solutions, lean processes, and Industry 4.0 implementations.',
  keywords: 'lean manufacturing, Industry 4.0, manufacturing efficiency, continuous improvement, LTS solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <CustomGreeting />
      </body>
    </html>
  )
}
