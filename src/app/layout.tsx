import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my professional portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}
