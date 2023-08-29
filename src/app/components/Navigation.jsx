'use client'
import '../globals.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Components.module.css'
import Image from 'next/image'
import Logo from '../assets/imgs/logoCasaBonita.jpg'
import Cart from '../assets/icons/cart-green.svg'
import { Oswald } from 'next/font/google'
import { Big_Shoulders_Display } from 'next/font/google'
import { DropdownMenu } from './Dropdown.jsx'


const Font = Oswald({
  weight: '400',
  subsets: ['latin']
})
const Big = Big_Shoulders_Display({
  weight: '700',
  subsets: ['latin']
})


export function Navigation ({navLinks}) {

  const pathname = usePathname()

  return (
    <>
      <header className={styles.header}>
      
{/* ------------------Logo CasaBonita----------------------------------- */}

          <Link href='/' className={styles.logoDesk} ><Image alt='Logo de Casa Bonita' src={Logo} className={styles.logoImg}/></Link>


{/* -----------------Menu Desktop------------------------------- */}
        <nav>

          <div className={styles.dropDesk}>
            <Link href={`/`} >Inicio</Link>
            <DropdownMenu />
            <Link href={`/guias`}> <span>Guias</span><span className={styles.Free}><p className={Big.className}>GRATIS</p></span></Link>
            <Link href={`https://www.instagram.com/yas.casabonita/`}>Blog</Link>
            <Link href={`/contact`}>Contacto</Link>
            <Link href={`/cart`}><Image src={Cart} className={styles.cart}/></Link>
          </div>

{/*---------------------- Menu Mobile ------------------------------------*/}

          <div className={styles.dropMob}>
            <DropdownMenu />
            <Link href='/' className={styles.logoMob}><Image alt='Logo de Casa Bonita' src={Logo} className={styles.logoImg}/></Link>
            <Link href={`/cart`}><Image src={Cart} className={styles.cart}/></Link>
          </div>

        </nav>

      </header>
    </>
  )
}