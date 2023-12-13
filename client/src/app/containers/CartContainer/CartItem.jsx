import { useContext } from "react";
// import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from "../../Context/CartContext";
import { } from './Cart.module.css'
// import { useParams } from "react-router-dom";
// import { Cart } from "./cart";
// import { getFirestore } from '././firebase';
// import Loading from './ItemListContainers/Loading';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card';

// let Slink = {color:'gold', backgroundColor:'#4a0080', borderRadius:4, borderColor:'black', padding:4}
export const CartItem = ({product}) => {
    const { RemoveElementCart } = useContext(CartContext);
    return (
      <>
        <link
          href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
  
        <link
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <div className="container">
              <tr>
                <td data-th="Product" >
                  <div className="row">
                    <div className="col-sm-2 hidden-xs">
                      <img
                        src={product.item.img}
                        alt="imagen"
                        className="img-responsive"/>
                    </div>
                    <div className="col-sm-10">
                      <h4 className="nomargin">{product.item.name}</h4>
                      <p> {product.item.description} </p>
                    </div>
                  </div>
                </td>
                <td data-th="Price">  ${product.item.price} </td>
                <td data-th="Quantity">{product.quantity}</td>
                <td data-th="Subtotal" className="text-center">
                  <p>${product.item.price * product.quantity}</p>
                </td>
                <td className="actions" data-th="">
                 
                  <button   onClick={() => RemoveElementCart(product)}  className="btn btn-danger btn-sm">
                    <i className="fa fa-trash-o"></i>
                  </button>
                </td>
              </tr>
            
        </div>
      </>
    );
  }