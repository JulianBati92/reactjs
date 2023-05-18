import React from 'react';

const ItemDetailContainer = () => {
  const product = {
    id: 1,
    name: 'Mate de madera',
    description: 'Mate de madera tallado a mano',
    material: 'Madera',
    color: 'Natural',
    price: 5000,
    image: 'mate-madera.jpg',
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Material: {product.material}</p>
      <p>Color: {product.color}</p>
      <p>Precio: ${product.price}</p>
      <img src={product.image} alt={product.name} />

      <div>
        <h3>Características adicionales</h3>
        <ul>
          <li>Hecho a mano con madera de calidad</li>
          <li>Acabado suave y duradero</li>
          <li>Diseño único y elegante</li>
        </ul>
      </div>

      <div>
        <h3>Opciones de personalización</h3>
        <select>
          <option value="natural">Natural</option>
          <option value="oscuro">Oscuro</option>
        </select>
      </div>

      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;