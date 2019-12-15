import React from 'react';
import {Link, NavLink} from 'react-router-dom';


const Header = () => (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container">
<Link to="/productos" className ="navbar-brand">
    React CRUD
</Link>
<ul className = "navbar-nav mr-auto">
    <li className="nav-item">
        <NavLink
        to='/registros'
        className="nav-link"
        >Registros</NavLink>
    </li>
    <li className="nav-item">
        <NavLink
        to='/nuevo-registro'
        className="nav-link"
        activeClassName="active"
        >Nuevo Registro</NavLink>
    </li>
</ul>
</div>
</nav>
);

export default Header;