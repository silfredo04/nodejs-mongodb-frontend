import React from 'react';
import { NavLink } from 'react-router-dom'


export const NavBar = () => {
  

  return (
    <div className="app">
      <div className="app-bar">
        <div className="nav-items">
          <h1 className="brand">GESTOR P</h1>
          <div className="desktop-nav">
            <NavLink to="/inicio" className="nav-item">INICIO</NavLink>
            <NavLink to="/crear" className="nav-item">CREAR PERSONA</NavLink>
            <NavLink to="/listar" className="nav-item">LISTAR PERSONA</NavLink>
            <NavLink to="/" className="nav-item">REGRESAR</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}


