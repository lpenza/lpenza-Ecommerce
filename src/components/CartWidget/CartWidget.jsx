import React from 'react';
import logo from './cart.png'

const CartWidget = () => {
  return (
    <>

      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="logo"
      />
    </>
  )
}

export default CartWidget
