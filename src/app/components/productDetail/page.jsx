'use client'
import { Button } from '@nextui-org/react';
import Image from 'next/image'
import styles from './productDetail.module.css'
import asesoria from '../../assets/imgs/banner.jpg'
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { collection, addDoc, doc, getDoc, onSnapshot, query, querySnapshot } from "firebase/firestore"
import { db } from '../../firebase'

export default function productDetail() {

  const [items, setItems] = useState([
    // { name: 'telar', price: 5},
    // { name: 'macrame', price: 5},
    // { name: 'vela', price: 5},
  ])
  const [newItem, setNewItem] = useState({name: '', price: ''});

    useEffect(() => {
        // const dbRef = collection('productos');
          const q = query(collection(db, "Macrame"));
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
    return(
      <main>

            {/* <h1>product1</h1> */}

            <div className={styles.layout}>
      
            {/* {items.map((item, id) => (
                <li
                  key={id}
                  className={styles.product}
                > */}
                  <div className={styles.card}>
                    <Image src={asesoria} width={800} height={800} alt="Macramé Producto comprable" className={styles.cardImg}/>
                    <div className={styles.cardBody}>
                      <div className={styles.cardSectionA}>
                        <h3 className={styles.cardTitle}>Macramé Boho XS
</h3>
                        <p className={styles.cardPrice}>$3000</p>
                      </div>
                      <div className={styles.cardSectionB}>
                        <p className={styles.cardTextT}>Opiniones</p>
                        <p className={styles.cardText}>5 <span>⭐⭐⭐⭐⭐</span></p>
                        <p className={styles.cardText}>200 reviews</p>
                      </div>
                      <div className={styles.cardSectionB}>
                        <p className={styles.cardTextT}>Stock</p>
                        <p className={styles.cardText}>En stock y listo para viajar</p>
                      </div>
                      <Link className={styles.cardBtnVM} href={'/components/cart'}><Button  className="bg-gradient-to-tr from-yellow-200 to-yellow-300 text-black shadow-lg">Añadir al Carrito</Button></Link>
                      <div className={styles.cardSectionB}>
                        <p className={styles.cardTextT}>Description</p>
                        <p className={styles.cardText}>Realizado en hilo macrame de algodón premium, tejido a mano</p>
                      </div>
                    </div>
                  </div>
                {/* </li>
              ))} */}

        </div>

        </main>
    )
}


