import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink exact to="/"  activeClassName="nav-active" className="lien"> <Logo /> </NavLink>
            <NavLink exact to="#"  activeClassName="nav-active" className="lien"> <i class="fas fa-sign-in-alt"></i> </NavLink>
        </div>
    );
};

export default Navbar;