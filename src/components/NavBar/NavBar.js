import React from 'react'

import './NavBar.css';

const NavBar = () => {
    return (
        <div className="nav-conteiner">
            <h1 className="nav-logo">
                LEGO
            </h1>
            <ul className="nav-list">
                <li>
                    <a href="/" className="nav-item">Comprar</a>
                </li>
                <li>
                    <a href="/" className="nav-item">Registrarse</a>
                </li>
                <li>
                    <a href="/" className="nav-item">Contacto</a>
                </li>
            </ul>

            
        </div>
    )
}

export default NavBar
