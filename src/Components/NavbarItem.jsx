import React from 'react';

const NavbarItem = (props) => {
    return (
        <li className="nav-item">
            <p className="nav-link">{props.name}</p>
        </li>
    );
};

export default NavbarItem;
