// 
'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from './home.module.css'
import talleres from './assets/imgs/tallerPresencial.jpeg'
import deco from './assets/imgs/decoremos1.png'
import macrame from './assets/imgs/macrame/macrame1.jpg'
import macramev2 from './assets/imgs/macrame/macrame2.jpg'
import macrameG from './assets/imgs/macrame/guirnaldaMacrame.jpeg'
// import ItemList from './components/ItemList/ItemList'
import React from 'react';
import { Button } from '@nextui-org/react';

export default function Home() {

  return (
    <main className={styles.main}>

      <h1 className={styles.title}>Bienvenidos a CasaBonita</h1>
{/* -----------------------Slides-------------------------------- */}
      <div className={styles.containerS}>

        {/* Slide taller */}
        <Link href={`/talleres`}>
          <div className={styles.slides}>
            <Image className={styles.iSlide} src={talleres} width={300} height={500} alt='taller presencial' />
            <h2 className={styles.tSlide}>Talleres</h2>
          </div>
        </Link>

        {/* Slide macrame */}
        <Link href={`/productos`}>
          <div className={styles.slides}>
            <Image className={styles.iSlide} src={macrame} width={300} height={500} alt='macrame hecho a mano' />
            <h2 className={styles.tSlide}>Macramé</h2>
          </div>
        </Link>

      </div>

{/* ----------------------------------Productos------------------------------- */}
      <div>
        <h2 className={styles.title}>Los mas Elegidos:</h2>

        <div className={styles.layout}>

          <div className={styles.card} >
            <Image src={macramev2} alt="Macramé Producto comprable" className={styles.cardImg}/>
            <h3 className={styles.cardTitle} >Macramé</h3>
            <p className={styles.cardPrice}><b>Precio:</b>$2000</p>
            <Link href={'/productos'}><button type="submit" className={styles.cardBtnVM}>Ver mas</button></Link>
          </div>
          
          <div className={styles.card} >
            <Image src={macrameG} alt="Guirnalda Macramé Producto comprable" className={styles.cardImg}/>
            <h3 className={styles.cardTitle} >Guirnalda Macramé</h3>
            <p className={styles.cardPrice}><b>Precio:</b>$2000</p>
            <Link href={'/productos'}><button type="submit" className={styles.cardBtnVM}>Ver mas</button></Link>
          </div>
          
          <div className={styles.card} >
            <Image src={macrame} alt="Macramé Producto comprable" className={styles.cardImg}/>
            <h3 className={styles.cardTitle} >Macramé</h3>
            <p className={styles.cardPrice}><b>Precio:</b>$2000</p>
            <Link href={'/productos'}><button type="submit" className={styles.cardBtnVM}>Ver mas</button></Link>
          </div>
          
          <div className={styles.card} >
            <Image src={macramev2} alt="Macramé Producto comprable" className={styles.cardImg}/>
            <h3 className={styles.cardTitle} >Macramé</h3>
            <p className={styles.cardPrice}><b>Precio:</b>$2000</p>
            <Link href={'/productos'}><button type="submit" className={styles.cardBtnVM}>Ver mas</button></Link>
          </div>
          
        </div>

      </div>

{/* ---------------------------------Asesorias Online------------------------ */}
      <div className={styles.asesorias}>
        <h2 className={styles.title}>Asesorías Online</h2>
        <div className={styles.asesoriasD}>
          <p className={styles.asesoriasT2}>Descubri la magia de un HOGAR RENOVADO</p>
          <p className={styles.asesoriasT}>Decoremos Juntas</p>
          <Link href={'/asesorias'}> 
          <Button
            rounded
            disableRipple
            className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-primary/80 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-primary/50 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
            size="lg"
            >
            Ver mas
          </Button>
          </Link>
        </div>
      </div>

    </main>
  )
}