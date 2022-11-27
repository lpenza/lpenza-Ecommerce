import React from 'react';
import cart from './img/cart.png';

export const EmptyCart = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8rem',
        minHeight: '80vh',
      }}
    >
      <span>Tu Carrito Esta Vacio</span>
      <img src={cart} width="450" height="450" alt="cart" />
    </div>
  );
};
