'use client'
import { useEffect, useState } from "react";
import styles from './products.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { collection, addDoc, doc, getDoc, onSnapshot, query, querySnapshot } from "firebase/firestore"
import { db } from '../../firebase'

export default function Products() {

const [items, setItems] = useState([
    // { name: 'telar', price: 5},
    // { name: 'macrame', price: 5},
    // { name: 'vela', price: 5},
  ])
  const [newItem, setNewItem] = useState({name: '', price: ''});

    useEffect(() => {
        // const dbRef = collection('productos');
          const q = query(collection(db, "Items"));
          const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const itemsArray = [];
      
            querySnapshot.forEach((doc) => {
              itemsArray.push({ ...doc.data(), id: doc.id});
            })
            setItems(itemsArray)
      
            // * Read total itemsArray
            // const calculateTotal = () => {
            //   const totalPrice = itemsArray.reduce((sum, item) => sum + parseFloat(item.price), 0)
            //   setTotal(totalPrice)
            // }
            // calculateTotal()
            // return () => unsubscribe()
          })
        }, [])

    return (
        <main className={styles.main}>

            <h1 className={styles.title}>Nuestros Productos Disponibles</h1>

            <div className={styles.layout}>
              {items.map((item, id) => (
                  <li
                  key={id}
                  className={styles.product}
                  >
                  <div className={styles.card}>
                      <Image src={item.img} width={100} height={100} alt="Macramé Producto comprable" className={styles.cardImg}/>
                      <h3 className={styles.cardTitle}>{item.name}</h3>
                      <p className={styles.cardPrice}>${item.price}</p>
                      <Link href={'/productDetail'}><button type="submit" className={styles.cardBtnVM}>Ver mas</button></Link>
                  </div>
                  </li>
              ))}
            </div>
        </main>
    )
}