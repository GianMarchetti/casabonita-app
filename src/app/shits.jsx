// import React, { useEffect, useState } from 'react';


//   const [items, setItems] = useState([
//     // { name: 'telar', price: 5},
//     // { name: 'macrame', price: 5},
//     // { name: 'vela', price: 5},
//   ])
//   const [newItem, setNewItem] = useState({name: '', price: ''});
//   const [total, setTotal] = useState(0);

// // Add items from database
//   const addItem = async (e) => {
//     e.preventDefault();
//     if (newItem.name !== '' && newItem.price !== '') {
//       // setItems([...items, newItem])
//       await addDoc(collection(db, 'items'), {
//         name: newItem.name.trim(),
//         price: newItem.price,
//       })
//       setItems({ name: '', price: ''})
//     }
//   }

// Read item from database
  // useEffect(() => {
  // // const dbRef = collection('productos');
  //   const q = query(collection(db, "Macrame"));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     const itemsArray = [];

  //     querySnapshot.forEach((doc) => {
  //       itemsArray.push({ ...doc.data(), id: doc.id});
  //     })
  //     setItems(itemsArray)

  //     // * Read total itemsArray
  //     // const calculateTotal = () => {
  //     //   const totalPrice = itemsArray.reduce((sum, item) => sum + parseFloat(item.price), 0)
  //     //   setTotal(totalPrice)
  //     // }
  //     // calculateTotal()
  //     // return () => unsubscribe()
  //   })
  // }, [])


// delete items from database
// const deleteItem = async (id) => {
//   await deleteDoc(doc(db, 'items', id));
// };

{/* {items.map((item, id) => (
                <li
                  key={id}
                  className={styles.product}
                >
                  <div className={styles.card}>
                    <Image as={NextImage} isZoomed src={item.img} width={400} height={500} alt="Macramé Producto comprable" className={styles.cardImg}/>
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{item.name}</h3>
                      <p className={styles.cardPrice}><b>Precio:</b>${item.price}</p>
                      <Link href={'/components/productDetail'} className={styles.cardBtn}><Button className={styles.cardBtnVM}>Ver mas</Button></Link>
                    </div>
                  </div>
                </li>
              ))} */}
