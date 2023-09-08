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
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import './dropdown.css'


const Font = Oswald({
  weight: '400',
  subsets: ['latin']
})

const Big = Big_Shoulders_Display({
  weight: '700',
  subsets: ['latin']
})

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen = boolean) {
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

const linksDesk = [{
  label: 'Productos',
  route: '/components/products'
},{
  label: 'Asesorias',
  route: '/asesorias'
},{
    label: 'Talleres',
    route: '/talleres'
}]

function useMenuAnimationMob(isOpen = boolean) {
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

const linksMob = [{
  label: 'Inicio',
  route: '/',
},{
  label: 'Productos',
  route: '/productos'
},{
  label: 'Asesorias',
  route: '/asesorias'
},{
    label: 'Talleres',
    route: '/talleres'
},{
  label: 'Contacto',
  route: '/contact'
},{
    label: 'Guias Gratis',
    route: '/guias'
},{
    label: 'Blog',
    route: '/blog'
}]


export function Navigation ({navLinks}) {

  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);  
  const scopeMob = useMenuAnimationMob(isOpen);  
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
            }} className="dropDesk">
              {linksDesk.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>
                  {label}
                </Link>
              </li>
            ))}
            </ul>{" "}
            </div>
            <Link href={`/guias`}> <span>Guias</span><span className={styles.Free}><p className={Big.className}>GRATIS</p></span></Link>
            <Link href={`https://www.instagram.com/yas.casabonita/`}>Blog</Link>
            <Link href={`/contact`}>Contacto</Link>
            <Link href={`/cart`}><Image src={Cart} className={styles.cart}/></Link>
          </div>

{/*---------------------- Menu Mobile ------------------------------------*/}

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
            <Link href='/' className={styles.logoMob}><Image alt='Logo de Casa Bonita' src={Logo} className={styles.logoImg}/></Link>
            <Link href={`/cart`}><Image src={Cart} className={styles.cart}/></Link>
          </div>

        </nav>

      </header>
    </>
  )
}