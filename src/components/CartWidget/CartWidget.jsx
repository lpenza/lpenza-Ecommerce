import React,{} from 'react';
import logo from './cart.png';
import  './style.css';
import { useCartContext } from "../../context/cartContext";

const CartWidget = () => {
  const { cart, getCartQty } = useCartContext();
  return (
    <>
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="logo"
      />
      <span className='cart'>{getCartQty()}</span>
    </>
  )
}

export default CartWidget
