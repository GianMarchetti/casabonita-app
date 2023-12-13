/* eslint-disable @next/next/no-async-client-component */
// 
'use client'
import NextImage from 'next/image'
import Link from 'next/link'
import styles from './home.module.css'
import { Button, Image } from '@nextui-org/react';
// import talleres from './assets/imgs/tallerPresencial.jpeg'
// import macrame from './assets/imgs/macrame/MacraméXL.jpg'
// import banner from './assets/imgs/tallerMacrame.jpg'
// import macramev2 from 'https://i.ibb.co/vP0R91Z/Macrame-XL.jpg'
// import macrameG from './assets/imgs/macrame/guirnaldaMacrame.jpeg'


import { client } from '../../sanity/lib/client'
import { groq } from 'next-sanity'

import { urlForImage } from "../../sanity/lib/image"
import {  XCircleIcon } from '@heroicons/react/24/solid'
import { formatCurrencyString } from "use-shopping-cart"

import { SanityProduct } from "../../config/inventory"
import { shimmer, toBase64 } from "../../lib/image"
import { siteConfig } from '../../config/site'
import { cn } from '../../lib/utils'
import { ProductGrid } from './components/product-grid';
import { product } from '../../sanity/schemas/product-schema';


const macrame = [
  {
    link: `/components/products/guirnalda-macram`,
    name: "Guirnalda Macramé",
    image: "https://i.ibb.co/1dYP951/guirnalda-Macrame.jpg",
  },
  {
    link: `/components/products/tapz-macram-boho`,
    name: "Macramé Boho",   
    image: "https://i.ibb.co/Dwj9tks/Macrame-xs.jpg",
  },
  {
    link: `/components/products/tapz-macram-lelis`,
    name: "Macramé Lelis",
    image: "https://i.ibb.co/vP0R91Z/Macrame-XL.jpg",
  }
]

export default  function Page() {

  return (
    <main className={styles.main}>

      <div className={styles.banner}>
        <h1 className={styles.title}>{siteConfig.name}</h1>
        <p className={styles.textBanner}>{siteConfig.description}</p>
      </div>

{/* -----------------------Slides-------------------------------- */}
      <h2>Te recomendamos nuestros</h2>
      
      <div className={styles.containerS}>
        <Link href={`/components/talleres`}>
          <div className={styles.slides}>
            <Image 
            as={NextImage} 
            className={styles.iSlide} 
            isZoomed 
            src='https://i.ibb.co/NVvJ7Rj/taller-Presencial.jpg'
             width={300} 
             height={500} 
             alt='taller presencial' />
            <h3 className={styles.tSlide}>Talleres</h3>
          </div>
        </Link>

        <Link href={`/components/macrame`}>
          <div className={styles.slides}>
            <Image as={NextImage} className={styles.iSlide} isZoomed src='https://i.ibb.co/vP0R91Z/Macrame-XL.jpg' width={300} height={500} alt='macrame hecho a mano' />
            <h3 className={styles.tSlide}>Macramés</h3>
          </div>
        </Link>

      </div>

{/* ----------------------------------Mas elegidos------------------------------- */}
      <div>

        <h2 className={styles.title}>Los mas Elegidos:</h2>
        
        <div className={styles.layout}>
          <div className={styles.cardLayout}>
            {macrame.map((macrame, id) => (
              <li
                  key={id}
                  className={styles.product}
                  >
                  <Link href={macrame.link} className={styles.cardBtn}>
                  <div className={styles.card}>
                      <Image as={NextImage} isZoomed src={macrame.image} width={400} height={600} alt="Macramé Producto comprable" className={styles.cardImg}/>
                      <div className={styles.cardBody}>
                          <h3 className={styles.cardTitle}>{macrame.name}</h3>
                          <Button color='primary' 
                          className="text-black bg-amber-100 rounded-2xl">Ver Producto</Button>
                      </div>
                  </div>
                  </Link>
              </li>
              ))} 
          </div>

          <Link href={`/components/products/`} className={styles.cardBtn}>
          <Button
            className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 bg-gradient-to-tr from-yellow-100 to-yellow-200 text-black shadow-xl"
            size="lg"
            >
            Ver mas Productos
          </Button>
          </Link>

        </div>

      </div>
          
{/* ---------------------------------Asesorias Online------------------------ */}
      <div className={styles.asesorias}>
        <h2 className={styles.title}>Asesorías Online</h2>
        <div className={styles.asesoriasD}>
          <p className={styles.asesoriasT2}>Descubri la magia de un HOGAR RENOVADO</p>
          <p className={styles.asesoriasT}>Decoremos Juntas</p>
          <Link href={'/components/asesorias'}> 
          <Button
            className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 bg-gradient-to-tr from-yellow-100 to-yellow-200 text-black shadow-xl after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-gradient-to-tr after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
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