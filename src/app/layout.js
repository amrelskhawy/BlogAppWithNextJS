import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Blog App',
  description: 'Say What you want freely',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className='container'>
          <Navbar />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
