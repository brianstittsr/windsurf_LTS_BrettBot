import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
        <script
          data-embed-id="977e9fe6-1440-4d39-a8cb-38a4d8bb9dcb"
          data-base-api-url="https://anythingllm-production-7612.up.railway.app/api/embed"
          src="https://anythingllm-production-7612.up.railway.app/embed/anythingllm-chat-widget.min.js"
        ></script>
      </body>
    </html>
  )
}
