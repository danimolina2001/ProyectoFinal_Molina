import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="item">
      <Link to={`/item/${product.id}`}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
      </Link>
    </div>
  );
};

export default Item;