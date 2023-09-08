// 
'use client'
import Image from 'next/image'
import Link from 'next/link'
// import { Inter } from 'next/font/google'
import styles from './home.module.css'
import talleres from './assets/imgs/tallerPresencial.jpeg'
import macrame from './assets/imgs/macrame/MacraméXL.jpg'
// import macramev2 from 'https://i.ibb.co/vP0R91Z/Macrame-XL.jpg'
// import deco from './assets/imgs/decoremos1.png'
// import macrameG from './assets/imgs/macrame/guirnaldaMacrame.jpeg'
// import ListProducts from './components/products/ListProducts'
import React, { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';
import { collection, addDoc, doc, getDoc, onSnapshot, query, querySnapshot } from "firebase/firestore"
import { db } from './firebase'

export default function Home() {

  const [items, setItems] = useState([
    // { name: 'telar', price: 5},
    // { name: 'macrame', price: 5},
    // { name: 'vela', price: 5},
  ])
  const [newItem, setNewItem] = useState({name: '', price: ''});
  const [total, setTotal] = useState(0);

// Add items from database
  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.name !== '' && newItem.price !== '') {
      // setItems([...items, newItem])
      await addDoc(collection(db, 'items'), {
        name: newItem.name.trim(),
        price: newItem.price,
      })
      setItems({ name: '', price: ''})
    }
  }

// Read item from database
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


// delete items from database
// const deleteItem = async (id) => {
//   await deleteDoc(doc(db, 'items', id));
// };

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
        <Link href={`/macrame`}>
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
      
            {items.map((item, id) => (
                <li
                  key={id}
                  className={styles.product}
                >
                  <div className={styles.card}>
                    <Image src={item.img} width={100} height={100} alt="Macramé Producto comprable" className={styles.cardImg}/>
                    <h3 className={styles.cardTitle}>{item.name}</h3>
                    <p className={styles.cardPrice}><b>Precio:</b>${item.price}</p>
                    <Link href={'/productDetail'}><button type="submit" className={styles.cardBtnVM}>Ver mas</button></Link>
                  </div>
                </li>
              ))}

        </div>

      </div>

           {/* <div className={styles.card} >
            <Image src={'https://firebasestorage.googleapis.com/v0/b/coderhouse-adf37.appspot.com/o/guirnaldaMacrame.jpeg?alt=media&token=e44469a7-6cbb-41cf-a5e4-067b357831ca'} width={100} height={100} alt="Macramé Producto comprable" className={styles.cardImg}/>
            <h3 className={styles.cardTitle} >Macramé</h3>
            <p className={styles.cardPrice}><b>Precio:</b>$2000</p>
            <Link href={'/productos'}><button type="submit" className={styles.cardBtnVM}>Ver mas</button></Link>
          </div>  */}
          
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