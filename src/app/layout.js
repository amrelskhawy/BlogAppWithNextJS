"use client"

import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import { ThemeProvider } from './context/ThemeContext'
import {AuthProvider} from "@/components/AuthProvider/AuthProvider";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <ThemeProvider>
          <AuthProvider>

        <div className='container'>
          <Navbar />
            <section>
              {children}
            </section>
          <Footer />
        </div>
          </AuthProvider>
      </ThemeProvider>
      </body>
    </html>
  )
}
