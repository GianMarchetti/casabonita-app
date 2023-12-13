'use client'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
// import productsPromise from '../../Mocks/productList';
import ItemDetail from "../ItemDetail/page";
import { getFirestore } from 'firebase/firestore';
// import { collection, addDoc, doc, getDoc, onSnapshot, query, querySnapshot } from "firebase/firestore"
// import { db } from './firebase'


export default function ItemDetailContainer() {

    const [products, setProducts] = useState({});
    const { id } = useParams();

    
    useEffect(() => {
        // conexion a la bd
        const baseDeDatos = getFirestore();

        // Guardamos la referencia de la coleccion que queremos tomar
        const itemCollection = baseDeDatos.collection('Items');

        // Tomando los datos
        itemCollection.doc(id).get().then(async (value) => {
            // console.log(value.data());
            setProducts({...value.data(), id: id})
        })
    }, [])
    // useEffect(() => {
    //     // const dbRef = collection('productos');
    //       const q = query(collection(db, "Macrame"));
    //       const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //         const itemsArray = [];
      
    //         querySnapshot.forEach((doc) => {
    //           itemsArray.push({ ...doc.data(), id: doc.id});
    //         })
    //         setItems(itemsArray)
      
    //         // * Read total itemsArray
    //         // const calculateTotal = () => {
    //         //   const totalPrice = itemsArray.reduce((sum, item) => sum + parseFloat(item.price), 0)
    //         //   setTotal(totalPrice)
    //         // }
    //         // calculateTotal()
    //         // return () => unsubscribe()
    //       })
    //     }, [])


    return (
        <>
            <ItemDetail products={products} />
        </>
    );
}
