import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Components/CartContext';

const ItemDetailContainer = ({ product, productImage }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const [cartItemQuantity, setCartItemQuantity] = useState(0);

  const handleAddToCart = () => {
    addToCart(product);
    setCartItemQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setCartItemQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <div className="card">
      {productImage && (
        <img src={productImage} alt={product.title} className="card-img-top" />
      )}

      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Precio: ${product.price}</p>
        <div>
          <h4>Características adicionales</h4>
          <ul>
            <li>Hecho a mano con madera de calidad</li>
            <li>Acabado suave y duradero</li>
            <li>Diseño único y elegante</li>
          </ul>
        </div>
        <div>
          <h4>Opciones de personalización</h4>
          <select className="form-select">
            <option value="natural">Natural</option>
            <option value="oscuro">Oscuro</option>
            <option value="rose">Rose</option>
          </select>
        </div>
        <div>
          <button onClick={handleAddToCart} className="btn btn-primary">
            Agregar al carrito
          </button>
          {cartItemQuantity > 0 && (
            <button onClick={handleRemoveFromCart} className="btn btn-secondary">
              Quitar del carrito
            </button>
          )}
          {cartItemQuantity > 0 && (
            <p className="mt-2">Cantidad en el carrito: {cartItemQuantity}</p>
          )}
          {cartItemQuantity > 0 && (
            <Link to="/checkout" className="btn btn-success">
              Ir al checkout
            </Link>
          )}
          <Link to={`/item/${product.id}`}>
            <button className="btn btn-primary">
              Ver más
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
