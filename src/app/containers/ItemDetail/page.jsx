'use client'
import {useState,useContext} from 'react';
import ItemCount from "./ItemCount/index";
import { styles } from "./ItemCount/ItemCount.module.css";
// import { h3S, H4S } from "../Item/Item.module.css";
import Link from 'next/link'
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { CartContext } from '../../Context/CartContext';
import { collection, addDoc, doc, getDoc, onSnapshot, query, querySnapshot } from "firebase/firestore"
import { db } from './firebase'



export default function ItemDetail() {

    const [irCart, setIrCart] = useState(false);
    const { addCart } = useContext(CartContext)

    const [items, setItems] = useState([
        // { name: 'telar', price: 5},
        // { name: 'macrame', price: 5},
        // { name: 'vela', price: 5},
      ])
      const [newItem, setNewItem] = useState({name: '', price: ''});
      const [total, setTotal] = useState(0);
    
    // Add items from database
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

    const onAdd = (contador) => {
        console.log("Se ha seleccionó", contador, "productos");
        addCart({item: products, quantity: contador})
        setIrCart(true);
    };

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
    //         const calculateTotal = () => {
    //           const totalPrice = itemsArray.reduce((sum, item) => sum + parseFloat(item.price), 0)
    //           setTotal(totalPrice)
    //         }
    //         calculateTotal()
    //         return () => unsubscribe()
    //       })
    //     }, [])
    
    return (
        // <Container fluid>
        //     <Row>
        //     <Col></Col>
        //     <Col></Col>
        //     <Col>
        <div>
            {items.map((item, id) => (
                <li
                  key={id}
                  className={styles.product}
                >
                  <div className={styles.card}>
                    <Image src={item.img} width={100} height={100} alt="Macramé Producto comprable" className={styles.cardImg}/>
                    <h3 className={styles.cardTitle}>{item.name}</h3>
                    <p className={styles.H4S}> {item.description} </p>
                    <p> <h4 className={styles.H4S}> Stock: </h4> {item.stock} </p>
                    <p>Tipo: {item.tipo}</p>
                    <p className={styles.cardPrice}><b>Precio:</b>${item.price}</p>

                    {irCart ? <Link onAdd={onAdd} className={styles.btnIC} to={`/cart/`}>Ir a Cart</Link> : <ItemCount onAdd={onAdd} />}
                  
                  </div>
                </li>
              ))}
        
                {/* <Card style={{  margin:8, borderColor:'green',backgroundColor:'pink',textAlign:'center',padding:4,color:'white' }}>
                <Card.Img variant="top" src={products.img} />
                <Card.Body>
                <Card.Title className={h3S}>{products.name}</Card.Title>
                <Card.Text>
                        <p className={H4S}> {products.description} </p>
                        <p> <h4 className={H4S}> Stock: </h4> {products.stock} </p>
                        <p>Tipo: {products.tipo}</p>
                        <p>Precio: {products.price}</p>
                </Card.Text>
                
                </Card.Body>
                </Card>
            </Col>
            <Col></Col>
            <Col></Col>
            </Row>
        </Container> */}
        </div>
    )
}
