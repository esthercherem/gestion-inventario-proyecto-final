// En src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link para crear enlaces internos

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Gestión de Inventario</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            {/* Agrega más elementos de lista para cada página */}
            <li className="nav-item">
              <Link className="nav-link" to="/inventario">Inventario</Link>
            </li>
            {/* Agrega más elementos de lista para cada página */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
