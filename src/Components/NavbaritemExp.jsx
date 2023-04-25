import React from 'react';

const NavbarItem = (props) => {
    return (
        <li className="nav-item dropdown">
            <p
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Redes sociales
            </p>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                    <p className="dropdown-item">Instagram</p>
                </li>
                <li href="/">
                    <p className="dropdown-item">Twitter</p>
                </li>
                <li href="/">
                    <p className="dropdown-item">Facebook</p>
                </li>
            </ul>
        </li>
    );
};


export default NavbarItem;
