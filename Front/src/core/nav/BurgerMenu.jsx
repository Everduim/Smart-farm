import React from 'react';
import "../nav/BurgerMenu.scss";
import { Link } from "react-router-dom";



const BurgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className="burger-menu" onClick={toggleMenu}>
      <img src="../public/burger-green.png" alt="" />
      {isOpen && (
        <nav className="burger-menu__nav">
           <ul>
       <li> <Link to="">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">register</Link></li>
        <li><Link to="/animales">Animales</Link></li>
        
      </ul>

        </nav>
      )}
    </div>
  );
};

export default BurgerMenu;

