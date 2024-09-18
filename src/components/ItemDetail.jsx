import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ product, onAddToCart }) => {
  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount onAdd={onAddToCart} />
    </div>
  );
};

export default ItemDetail;