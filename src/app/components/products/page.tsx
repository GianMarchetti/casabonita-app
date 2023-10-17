/* eslint-disable @next/next/no-async-client-component */

// import { useEffect, useState } from "react";
import styles from './products.module.css'
import Link from 'next/link'
import NextImage from 'next/image'
import { Image, Button } from '@nextui-org/react';
// import { collection, addDoc, doc, getDoc, onSnapshot, query, querySnapshot } from "firebase/firestore"
// import { db } from '../../firebase'
import { useRouter } from "next/navigation";

import { ProductFilters } from "../../components/product-filters"
import { ProductGrid } from "../../components/product-grid"
import { ProductSort } from "../../components/product-sort"
import { client } from '../../../../sanity/lib/client'
import { groq } from 'next-sanity'

import { SanityProduct } from '../../../../config/inventory'
import { siteConfig } from '../../../../config/site'
import { cn } from "../../../../lib/utils";

export default async function Products() {

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

// // const router = useRouter();
// // const { id } = router.query;

// const [items, setItems] = useState([
//     // { name: 'telar', price: 5},
//     // { name: 'macrame', price: 5},
//     // { name: 'vela', price: 5},
//   ])
//   const [newItem, setNewItem] = useState({name: '', price: ''});

//     useEffect(() => {
//         // const dbRef = collection('productos');
//           const q = query(collection(db, "Items"));
//           const unsubscribe = onSnapshot(q, (querySnapshot) => {
//             const itemsArray = [];
      
//             querySnapshot.forEach((doc) => {
//               itemsArray.push({ ...doc.data(), id: doc.id});
//             })
//             setItems(itemsArray)
      
//             // * Read total itemsArray
//             // const calculateTotal = () => {
//             //   const totalPrice = itemsArray.reduce((sum, item) => sum + parseFloat(item.price), 0)
//             //   setTotal(totalPrice)
//             // }
//             // calculateTotal()
//             // return () => unsubscribe()
//           })
//         }, [])

    return (
      
        <main className={styles.main}>

            <h1 className={styles.title}>Nuestros Productos Disponibles</h1>

            <div className={styles.layout}>
              <section className="mx-auto max-w-6xl px-6">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-10 dark:border-gray-800">
                  <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                    {products.length} producto{products.length === 1 ? "" : "s"} disponible{products.length === 1 ? "" : "s"}
                  </h3>
                  {/* Product Sort */}
                  {/* <ProductSort /> */}
                </div>

                <section aria-labelledby="products-heading" className="pb-24 pt-6">
                  <h2 id="products-heading" className="sr-only">
                    Products
                  </h2>
                  <div className={cn("grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2", products.length > 0 ? 'lg:grid-cols' : 'lg:grid-cols-[1fr_2fr]')}>
                    {/* <div className="hidden lg:block">
                    <ProductFilters />
                    </div> */}
                    {/* Product grid */}
                    <ProductGrid products={products}/>
                  </div>
                </section>
              </section>
            </div>
        </main>
    )
}