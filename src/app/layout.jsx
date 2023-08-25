import { Providers }  from './providers'
import './globals.css'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Sansita } from 'next/font/google'

const sansita = Sansita({
  weight: '700',
  subsets: ['latin'],
  backgroundColor: 'pink',
})

export const metadata = {
  title: 'Casa Bonita',
  description: 'Decoracion de interiores'
}

export default function RootLayout ({children}= { children: React.ReactNode }) {
  return (
    <html lang='es' class='light'>
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
