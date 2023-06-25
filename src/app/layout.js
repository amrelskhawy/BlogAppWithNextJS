"use client"

import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import { ThemeProvider } from './context/ThemeContext'


export const metadata = {
  title: 'Blog App',
  description: 'Say What you want freely',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <ThemeProvider>
        <div className='container'>
          <Navbar />
            <section>
              {children}
            </section>
          <Footer />
        </div>
      </ThemeProvider>
      </body>
    </html>
  )
}
