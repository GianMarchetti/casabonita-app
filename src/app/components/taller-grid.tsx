"use client"

import NextImage from 'next/image'
import { Image, Button } from '@nextui-org/react';
import Link from "next/link"
import styles from '../components/talleres/talleres.module.css'

import { urlForImage } from "../../../sanity/lib/image"
import {  XCircleIcon } from '@heroicons/react/24/solid'
import { formatCurrencyString } from "use-shopping-cart"

import { SanityProduct } from "../../../config/tallerInventory"
import { shimmer, toBase64 } from "../../../lib/image"
import BootstrapCarousel from '../carrousels/Bootstrap';

interface Props {
  talleres: SanityProduct[]
}

export function TallerGrid({talleres}: Props) {

  if (talleres.length === 0) {
    return (
      <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
        <div>
          <XCircleIcon className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
          <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No products found
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.containerTalleres}>
      {talleres.map((product) => (
          <div className={styles.card} 
           key={product._id}
            >
            <div >
              {/* <Image
                as={NextImage}
                isZoomed
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(225, 280))}`}
                src={urlForImage(product.images[0]).url()}
                alt={product.name}
                width={225}
                height={280}
                className={styles.cardImg}
              /> */}
              <BootstrapCarousel />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{product.name}</h3>
              <p className={styles.cardPrice}>{formatCurrencyString({ currency: product.currency, value: product.price })}</p>
              <Link key={product._id} href={`/components/talleres/${product.slug}`} className={styles.cardBtn}>
                <Button className={styles.cardBtnVM}>Ver Mas</Button>
              </Link>
            </div>
        </div>
      ))}
    </div>
  )
}
