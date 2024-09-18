import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './ItemListContainer.css';

const products = [
  { id: '1', name: 'Orgullo y prejucio', description: 'Autora: Jane Austen. La señora Bennet ha criado a sus cinco hijas con el único deseo de encontrar marido. La llegada al vecindario de Charles Bingley, un joven rico y soltero, con algunas amistades despierta el interés de las hermanas Bennet y de las familias vecinas, que verán una excelente oportunidad para cumplir su propósito. Elizabeth, una de las hijas de los Bennet, empezará una singular relación con Darcy, uno de los amigos de Bingley, que desencadenará esta historia de orgullo y prejuicios entre los dos hasta llegar a conocer el verdadero amor.', price: 30000, category: 'libros' },
  { id: '2', name: 'Smile', description: 'Director: Parker Finn. Después de presenciar un incidente extraño y traumático que involucra a un paciente, la Dra. Rose Cotter comienza a experimentar sucesos aterradores que no puede explicar. A medida que un terror abrumador comienza a apoderarse de su vida, Rose debe enfrentar su inquietante pasado para poder sobrevivir y escapar de su nueva y horrible realidad.', price: 10000, category: 'peliculas' },
  { id: '3', name: 'El ultimo baile', description: 'Cantante: Trueno. El último baile es el tercer álbum de estudio del rapero argentino Trueno. Fue lanzado el 23 de mayo de 2024 a través de Sur Capital Records y distribuido por Sony Music Latin. El álbum fue precedido por el lanzamiento de cuatro sencillos: «Tranky Funky», «Ohh Baby», «No Cap» y «The Roof Is on Fire».', price: 15000, category: 'musica' },
  { id: '4', name: 'Mujercitas', description: 'Autora: Louisa May Alcott. "Mujercitas" narra cómo cuatro niñas se convierten en mujeres, con la Guerra de Secesión norteamericana como telón de fondo. Son momentos difíciles, que la familia March, afrontará con fortaleza y dignidad.', price: 25000, category: 'libros' },
  { id: '5', name: 'Mad Max: furia en el camino', description: 'Director: George Miller. Aunque está decidido a vagar solo por el páramo post-apocalíptico, Mad Max se une a Furiosa, una comandante fugitiva, y su banda, quienes están tratando de escapar de un señor de la guerra.', price: 15000, category: 'peliculas' },
];

const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = () => {
      if (categoryId) {
        setProductsList(products.filter(product => product.category === categoryId));
      } else {
        setProductsList(products);
      }
    };
    fetchProducts();
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2>Catálogo de Productos</h2>
      <ItemList products={productsList} />
    </div>
  );
};

export default ItemListContainer;