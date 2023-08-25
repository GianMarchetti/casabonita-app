import React, { useContext } from 'react';
// import Card from 'react-bootstrap/Card';
// import { useParams } from "react-router-dom";
// import { getFirestore } from '../../../firebase';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import {h3S} from '../../Components/Item/Item.module.css'
import { CartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";
import Loading from '../ItemListContainers/Loading';
import { CartItem } from './CartItem';
import "./Cart.module.css";
// import { Firebase } from '../../firebase/Firebase';

export const Cart = () => {
    
    const { cart,showQuantity,clearCart,CartPrice} = useContext(CartContext)
  
    return(
        <div> 
            {showQuantity() > 0 ? (
        <div style={{margin:8, borderRadius:8, border:'solid', borderColor:'green', backgroundColor:'white',textAlign:'center',padding:4,color:'pink' }}>
          <table id="cart" className="table table-hover table-condensed">
            <thead className="category-cart">
              <tr>
                <th className="category-1">Producto</th>
                <th className="category-2">Precio</th>
                <th className="category-3">Cantidad</th>
                <th className="category-4 text-center">Subtotal</th>
                <th className="category-5"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <CartItem key={product} product={product} />
              ))}
            </tbody>
          </table>
          <tfoot>
            <tr>
              <td>
                <Link to="/" className="btn btn-warning">
                  <i className="fa fa-angle-left"></i> Seguir Comprando</Link>
              </td>
              <td>
                <Link to="/" onClick={clearCart} className="btn btn-clear btn-block" style={{backgroundColor:'darkred',color:'white'}}>
                  Vaciar Carrito <i className="fa fa-angle-right"></i></Link>
              </td>
              <td colspan="2" className="hidden-xs"></td>
              <td className="hidden-xs text-center">
                <strong className="total">Total: ${CartPrice()}</strong>
              </td>
              <td>
                <Link to="/firebase" className="btn btn-success btn-block">
                Finalizar Compra <i className="fa fa-angle-right"></i></Link>
              </td>
            </tr>
          </tfoot>
        </div>
      ) : (<div>
          <h2>Todavía no hay productos en el carrito<Button><Link style={{color:'black'}} to={`/`} >Volver al home</Link></Button><Loading/></h2>
          </div>)}
        </div>
  )
}



/* <Container fluid style={{marginTop:8, borderColor:'black',textAlign:'center',padding:4,color:'#4a0080' }}>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col onAdd={onAdd} setIrCart={setIrCart}>
                        <Card style={{margin:8, borderColor:'#4a0080',backgroundColor:'black',textAlign:'center',padding:4,color:'#4a0080' }}>
                            <Card.Img variant="top" src={products.img}/>
                        <Card.Body>
                            <Card.Title className={h3S}>{products.name}</Card.Title>
                        <Card.Text>
                            <p>Precio:${products.price}</p>
                            <p>Cantidad Seleccionada:{contador}</p>
                        </Card.Text>
                        </Card.Body>
                            <Button RemoveElementCart={RemoveElementCart}>Sacar del Carrito</Button>
                        </Card>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container> */