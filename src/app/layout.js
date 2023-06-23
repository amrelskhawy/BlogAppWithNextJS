import Navbar from '@/components/Navbar'
import './globals.css'
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
            <section>
              {children}
            </section>
          <Footer />
        </div>
      </body>
    </html>
  )
}
