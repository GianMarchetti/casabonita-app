
'use client'
import { useEffect, useState } from "react";
import styles from './macrame.module.css'
import Image from 'next/image'
import taller from '../assets/imgs/contacto.png'
import Link from 'next/link'
import { collection, addDoc, doc, getDoc, onSnapshot, query, querySnapshot } from "firebase/firestore"
import { db } from '../firebase'

export default function macrame(){

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

    return ( 
          <main className={styles.main}>

            <h1 className={styles.title}>Nuestros Productos de macrame</h1>

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

            <div className={styles.tallerSection}>
                <h2 className={styles.tallerText}>Tambien podes aprender a hacer Macramé con nuestros talleres</h2>
                <div className={styles.tallerBanner}>
                  <Link href='/talleres' className={styles.Link}>
                    <div className={styles.tallerCard}> 
                      <p>
                        Taller Presencial
                      </p>
                    </div>
                  </Link>
                  <Link href='/talleres' className={styles.Link}>
                    <div className={styles.tallerCard}> 
                      <p>
                        Taller Online
                      </p>
                    </div>
                  </Link>
                  <Link href='/talleres' className={styles.Link}>
                    <div className={styles.tallerCard}> 
                      <p>
                        Taller Personalizado
                      </p>
                    </div>
                  </Link>
                </div>
                {/* <Image src={taller} width={100} height={100} alt="Taller de Macramé" className={styles.tallerImg} /> */}
            </div>

          </main>
    )
}
