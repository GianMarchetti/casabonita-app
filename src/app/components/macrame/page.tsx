/* eslint-disable @next/next/no-async-client-component */
'use client'
import styles from './macrameP.module.css'
import Link from 'next/link'
import NextImage from 'next/image'
import { Image, Button } from '@nextui-org/react';


export default function Macrame() {

    const macrame = 
    [
      {
        name: "Tapíz Macramé Boho",
        price: "3000",
        link: '/components/products/tapz-macram-boho',
        image:"https://i.postimg.cc/SQvTTkTZ/Macrame-Boho-XS.jpg",
      },
      {
        name: "Macramé Sobremesa",
        price: "3000",
        link: '/components/products/macram-sobremesa',
        image:"https://i.postimg.cc/Qdpfd5XP/Macrame-Sobre-Mesa.jpg",
      },
      {
        name: "Tapíz Macramé Lelis",
        price: "3000",
        image:"https://i.postimg.cc/MKfsgNgz/Macrame-XL.jpg",
        link: '/components/products/tapz-macram-lelis',
      },
      {
        name: "Tapíz Macrame Greta",
        price: "3000",
        link: '/components/products/tapz-macrame-greta',
        image:"https://i.postimg.cc/SsKddvWF/Macrame-XS.jpg",
      },
      {
        name: "Guirnalda Macramé",
        price: "3000",
        link: '/components/products/guirnalda-macram',
        image:"https://i.postimg.cc/sgFnzKR7/guirnalda-Macrame.jpg",
      },
      {
        name: "Macramé Posavaso",
        price: "3000",
        link: '/components/products/macram-posavaso',
        image:"https://i.postimg.cc/sgFnzKR7/guirnalda-Macrame.jpg",
      },
      {
        name: "Tapíz Trenzas",
        price: "3000",
        link: '/components/products/tapz-trenzas',
        image:"https://i.postimg.cc/sgFnzKR7/guirnalda-Macrame.jpg",
      },
      ]

    return (
      
        <main className={styles.main}>

            <h1 className={styles.title}>Nuestros Macrames Disponibles</h1>
            <h2 id="products-heading" className="text-lg">
                    Conocé tu nueva decoracion favorita. Nuestro Macramé esta realizado en hilo macrame de algodón premium, tejido a mano.
                  </h2>
            {/* <div className={styles.layout}> */}
              <section className="mx-auto max-w-6xl px-6 mb-6 border-b border-t border-gray-200">

                <section aria-labelledby="products-heading" className="pb-6 pt-6">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-10 justify-items-center lg:grid-cols-3 sm:grid-cols-2 lg:col-span-3 lg:gap-x-40">
                    {/* <div className={styles.cardLayout}> */}
                      {macrame.map((macrame, id) => (
                        <li
                            key={id}
                            className={styles.product}
                            >
                            <Link href={macrame.link} className="group text-sm w-fit">
                            <div className={styles.card}>
                                <Image as={NextImage} isZoomed src={macrame.image} width={400} height={600} alt="Macramé Producto comprable" className={styles.cardImg}/>
                                <div className={styles.cardBody}>
                                    <h3 className={styles.cardTitle}>{macrame.name}</h3>
                                    <p className={styles.cardPrice}>Precio: ${macrame.price}</p>
                                    <Button className="text-black bg-amber-100 border-2 hover:bg-amber-200 rounded-2xl">Ver Producto</Button>
                                </div>
                            </div>
                            </Link>
                        </li>
                        ))} 
                    </div>
                  {/* </div> */}
                </section>
              </section>
            {/* </div> */}

            <div className={styles.tallerSection}>
                <h2 className={styles.tallerText}>Tambien podes aprender a crear Macramé con nuestros talleres</h2>
                <div className={styles.tallerBanner}>
                  <Link href='/components/products/taller-presencial-santa-fe' className={styles.Link}>
                    <div className={styles.tallerCardP}> 
                      <p>
                        Taller Presencial
                      </p>
                    </div>
                  </Link>
                  <Link href='/components/products/taller-virtual-macram-niveles-1-2-y-3' className={styles.Link}>
                    <div className={styles.tallerCard}> 
                      <p>
                        Taller Virtual
                      </p>
                    </div>
                  </Link>
                  <Link href='/components/products/taller-macram-virtual-personalizado-1hs' className={styles.Link}>
                    <div className={styles.tallerCard}> 
                      <p>
                        Taller Personalizado
                      </p>
                    </div>
                  </Link>
                </div>
            </div>

        </main>
    )
}