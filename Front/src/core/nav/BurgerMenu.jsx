import React from 'react';
import "./BurgerMenu.scss";
import { Link } from "react-router-dom";
import { JwtContext } from "../../context/jwtContext"
import { useContext } from 'react';


const BurgerMenu = ({ isOpen, toggleMenu }) => {
  const { jwt } = useContext(JwtContext)
  return (
    <div className="burger-menu" onClick={toggleMenu}>
      <img src="/burger-green.png" alt="" />
      {isOpen && (
        <nav className="burger-menu__nav">
          <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            {!jwt && (
              <>
                <li><Link to="/register">Register</Link></li>
              </>
            )}
            {jwt && (
              <>
                <li><Link to="/especies">Especies</Link></li>
              </>
            )}
          </ul>

        </nav>
      )}
    </div>
  );
};

export default BurgerMenu;

