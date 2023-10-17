/* eslint-disable @next/next/no-async-client-component */
// 
'use client'
import NextImage from 'next/image'
import Link from 'next/link'
import styles from './home.module.css'
// import talleres from './assets/imgs/tallerPresencial.jpeg'
// import macrame from './assets/imgs/macrame/MacraméXL.jpg'
// import banner from './assets/imgs/tallerMacrame.jpg'
// import macramev2 from 'https://i.ibb.co/vP0R91Z/Macrame-XL.jpg'
// import macrameG from './assets/imgs/macrame/guirnaldaMacrame.jpeg'

import { Button, Image } from '@nextui-org/react';
// import { collection, addDoc, doc, getDoc, onSnapshot, query, querySnapshot } from "firebase/firestore"
// import { db } from './firebase'


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

// interface Props {
//   searchParams: {
//     date?: string
//     price?: string
//     color?: string
//     category?: string
//     size?: string
//     search?: string
//   }
// }

interface Props {
  products: SanityProduct[]
}

export default  function Page({products}: Props) {
  // const { date = 'desc', price, color, category, size, search } = searchParams
  // const priceOrder = price ? `| order(price ${price})` : ""
  // const dateOrder = date ? `| order(_createdAt ${date})` : ""
  // const order = `${priceOrder}${dateOrder}`

  // const products = await client.fetch<SanityProduct[]>(
  //   groq` ${order} {
  //   _id,
  //   _createdAt,
  //   name,
  //   sku,
  //   images,
  //   currency,
  //   price,
  //   description,
  //   "slug": slug.current
  // }`)
//  console.log(products)

// if (products.length === 0) {
//   return (
//     <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
//       <div>
//         <XCircleIcon className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
//         <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
//           No products found
//         </h1>
//       </div>
//     </div>
//   )
// }

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
            <Image as={NextImage} className={styles.iSlide} isZoomed src='https://i.ibb.co/NVvJ7Rj/taller-Presencial.jpg' width={300} height={500} alt='taller presencial' />
            <h3 className={styles.tSlide}>Talleres</h3>
          </div>
        </Link>

        <Link href={`/components/macrame`}>
          <div className={styles.slides}>
            <Image as={NextImage} className={styles.iSlide} isZoomed src='https://i.ibb.co/vP0R91Z/Macrame-XL.jpg' width={300} height={500} alt='macrame hecho a mano' />
            <h3 className={styles.tSlide}>Macramé</h3>
          </div>
        </Link>

      </div>

{/* ----------------------------------Productos------------------------------- */}
      <div>

      <h2 className={styles.title}>Los mas Elegidos:</h2>

      <Link href='/components/products/'>Products</Link>
        
          {/* <ProductGrid products={products} /> */}
        {/* <div className={styles.layout}> */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
          {/* {products.map((product) => (
            <Link key={product._id} href={`/products/${product.slug}`} className="group text-sm">
              <div className={styles.card} >
              <div >
                <Image
                  as={NextImage}
                  isZoomed
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(225, 280))}`}
                  src={urlForImage(product.images[0]).url()}
                  alt={product.name}
                  width={225}
                  height={280}
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{product.name}</h3>
                <p className={styles.cardPrice}>{formatCurrencyString({ currency: product.currency, value: product.price })}</p>
                <Link key={product._id} href={`/products/${product.slug}`} className="group text-sm ">
                  <Button color="warning" variant='bordered' className="text-black bg-amber-100 border-2 border-solid border-slate-300 hover:border-slate-500 rounded-2xl">Ver Mas</Button>
                </Link>
              </div>
              </div>
            </Link>
          ))}  */}
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
            // rounded
            disableRipple
            
            className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 bg-gradient-to-tr from-yellow-200 to-yellow-300 text-black shadow-xl after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-gradient-to-tr from-yellow-200 to-yellow-300 text-black shadow-xl after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
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