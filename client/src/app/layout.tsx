import './globals.css'
import { Metadata } from "next"
import { Providers }  from './providers'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Sansita } from 'next/font/google'

const sansita = Sansita({
  weight: '700',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Casa Bonita',
  description: 'Decoración de interiores, asesorias, macramé, talleres, ideas y más.',
  icons: {
    icon:'/favicon.ico'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout ({children}: RootLayoutProps ) {
  return (
    <html lang='es' className='light'>
      <body className={sansita.className}>
        <Providers> 
        <Navigation />
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  )
}
