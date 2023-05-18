import React, { useEffect, useState } from 'react';
import { getItems } from '../async-mocks/productsData';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItems()
      .then((res) => {
        setItems(res);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h2>Catálogo de productos</h2>
      {isLoading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-list">
          {items.map((item) => (
            <div key={item.id} className="product-item">
              <img src={item.image} alt={item.title} />
              <div className="product-details">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Precio: ${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;