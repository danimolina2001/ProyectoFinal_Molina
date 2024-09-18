import React, { useState } from 'react';

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(1);
  const stock = 10; // Ejemplo de stock

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    onAdd(count);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={handleAdd}>Añadir al carrito</button>
    </div>
  );
};

export default ItemCount;