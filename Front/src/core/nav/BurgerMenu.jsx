import React from 'react';
import "../nav/BurgerMenu.scss";

const BurgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className="burger-menu" onClick={toggleMenu}>
      <img src="../public/burger-green.png" alt="" />
      {isOpen && (
        <nav className="burger-menu__nav">
         <ul>
            <li>
              
            <a href="/animales">Animales</a>
            </li>
            <li>
              <a href="/especies">Especies</a>
            </li>
            <li>
              <a href="/servicios">xxx</a>
            </li>
            <li>
              <a href="/contacto">xxx</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default BurgerMenu;

