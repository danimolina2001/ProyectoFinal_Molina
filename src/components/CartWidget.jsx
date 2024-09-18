import React, { useContext } from 'react';
import CartContext from './CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span>{totalItems}</span>
    </div>
  );
};

export default CartWidget;