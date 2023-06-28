import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Components/CartContext';

const Navbar = ({ handleSearchSubmit, handleSearchChange }) => {
  const navbarLogo = 'Tu Matteoli';
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const cartContext = useContext(CartContext);
  const { cartItems } = cartContext;

  const handleCheckout = () => {
    navigate('/checkout'); // Navegar a la página Checkout.jsx
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <p className="navbar-brand">{navbarLogo}</p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ backgroundColor: 'transparent' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Página principal
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link position-relative" onClick={toggleCart}>
                <i className="bi bi-cart"></i>
                Carrito ({cartItems.length})
              </button>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Busca tus Matteoli"
              aria-label="Search"
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
      {cartOpen && (
        <div className="cart-popup bg-dark position-absolute top-100 end-0 p-3" style={{ zIndex: 10 }}>
          <h4 className="text-white">Carrito de compras</h4>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
                  <p className="text-white">{item.name}</p>
                  <p className="text-white">Precio: ${item.price}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white">No hay productos en el carrito</p>
          )}
          <button className="btn btn-primary position-relative z-index-10" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

