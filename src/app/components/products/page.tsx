/* eslint-disable @next/next/no-async-client-component */

import styles from './products.module.css'
import Link from 'next/link'
import NextImage from 'next/image'
import { Image, Button } from '@nextui-org/react';
import { useRouter } from "next/navigation";

import { ProductGrid } from "../product-grid"
import { client } from '../../../../sanity/lib/client'
import { groq } from 'next-sanity'

import { SanityProduct } from '../../../../config/inventory'
import { siteConfig } from '../../../../config/site'
import { cn } from "../../../../lib/utils";
import { seedSanityData } from '../../../../lib/seed';

export default async function Products() {
  // await seedSanityData()
  const products = await client.fetch<SanityProduct[]>(
    groq`*[_type == "product"]{
      _id,
      _createdAt,
      name,
      sku,
      images,
      currency,
      price,
      description,
      "slug": slug.current
    }`)
    // console.log(products)

    return (
      
        <main className={styles.main}>

            <h1 className={styles.title}>Nuestros Productos y Servicios Disponibles</h1>

              <section className="mx-auto max-w-6xl px-6">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-10 dark:border-gray-800">
                  <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                    {products.length} producto{products.length === 1 ? "" : "s"} disponible{products.length === 1 ? "" : "s"}
                  </h3>
                </div>

                <section aria-labelledby="products-heading" className="pb-24 pt-6">
                  <h2 id="products-heading" className="sr-only">
                    Products
                  </h2>
                  <div className={cn("grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2", products.length > 0 ? 'lg:grid-cols' : 'lg:grid-cols-[1fr_2fr]')}>
                    <div className="hidden lg:block">
                    </div>
                    <ProductGrid products={products}/>
                  </div>
                </section>
              </section>

        </main>
    )
}