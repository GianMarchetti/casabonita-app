'use client'
import '../globals.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Components.module.css'
import Image from 'next/image'
import Logo from '../assets/imgs/logoCasaBonita.jpg'
import { ShoppingBagIcon, PencilSquareIcon } from '@heroicons/react/20/solid'
import { Big_Shoulders_Display } from 'next/font/google'
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { Button } from '@nextui-org/react'
import { useShoppingCart } from "use-shopping-cart"
import './dropdown.css'


const Big = Big_Shoulders_Display({
  weight: '700',
  subsets: ['latin']
})

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen : boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)"
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0
      }
    );
  }, [isOpen]);

  return scope;
}

const linksDesk = [
  {
  label: 'Productos',
  route: '/components/products'
},
  {
  label: 'Macramé',
  route: '/components/macrame'
},
{
  label: 'Asesorias',
  route: '/components/asesorias'
},
{
    label: 'Talleres',
    route: '/components/talleres'
}
]

function useMenuAnimationMob(isOpen : boolean) {
  const [scopeMob, animateMob] = useAnimate();

  useEffect(() => {
    animateMob(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animateMob(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)"
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5
      }
    );

    animateMob(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0
      }
    );
  }, [isOpen]);

  return scopeMob;
}

const linksMob = [
  {
  label: 'Inicio',
  route: '/',
},{
  label: 'Blog',
  route: `https://www.instagram.com/yas.casabonita/`
},
{
  label: 'Productos',
  route: '/components/products'
},
{
  label: 'Macramé',
  route: '/components/macrame'
},
{
  label: 'Asesorias',
  route: '/components/asesorias'
},
{
  label: 'Talleres',
  route: '/components/talleres'
},
{
  label: 'Contacto',
  route: '/components/contact'
},
{
  label: 'Guias Gratis',
  route: '/components/guias'
}
]


export function Navigation () {
  const { cartCount } = useShoppingCart()
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);  
  const scopeMob = useMenuAnimationMob(isOpen);  
  const pathname = usePathname()

  if (pathname.startsWith('/studio')) return null

  return (
    <header className={styles.header}>

{/* -----------------Menu Desktop------------------------------- */}

      <nav className={styles.nav}>

        <div className={styles.dropMob}>
            <div className="menu" ref={scopeMob} >
            <motion.button 
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
                    <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                </div>
            </motion.button> 
                  <ul style={{
                      pointerEvents: isOpen ? "auto" : "none",
                      clipPath: "inset(10% 50% 90% 50% round 10px)"
                    }} className="dropMob">
                      {linksMob.map(({ label, route }) => (
                      <li key={route}>
                        <Link href={route}>
                          {label}
                        </Link>
                      </li>
                    ))}
                    </ul>{" "}
            </div>
          </div>

        <Link href='/'>
          <Image priority alt='Logo de Casa Bonita' src={Logo} className={styles.logoImg} width={200} height={200} />
        </Link>

        <div className={styles.links}>             
          <div className={styles.dropDesk}>
            <Link href={`/`} >Inicio</Link>
            {/* <Link href={`/components/products/`} >p</Link> */}
            <div className="menu" ref={scope} >
            <motion.button 
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
                    <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                </div>
            </motion.button>
            <ul style={{
              pointerEvents: isOpen ? "auto" : "none",
              clipPath: "inset(10% 50% 90% 50% round 10px)"
              }}>
                {linksDesk.map(({ label, route }) => (
                <li key={route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>{" "}
            </div>
            <Link href={`/components/guias`}> <span>Guias</span><span className={styles.Free}><p className={Big.className}>GRATIS</p></span></Link>
            <Link href={`https://www.instagram.com/yas.casabonita/`}>Blog</Link>
            <Link href={`/components/contact`}>Contacto</Link>
            </div>
            <Link href={`/components/cart`} className='h-fit w-fit'>
              <Button size='sm' className='bg-amber-100 lg:bg-transparent hover:bg-amber-100 sm:bg-amber-100'>
                <span className="ml-1 text-sm font-bold text-black ">{cartCount}</span>
                <ShoppingBagIcon className="h-6 w-6" />
              </Button>
            </Link>
            {/* {process.env.NODE_ENV === 'development' && (
            <Link href='/studio'>
              <Button size='sm' variant='ghost'>
                <PencilSquareIcon className='h-5 w-5' />
              </Button>
            </Link>
          )} */}
        </div>

      </nav>

    </header>
  )
}