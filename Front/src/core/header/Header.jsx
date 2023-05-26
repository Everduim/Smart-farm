import React, { useState } from 'react';
import BurgerMenu from '../nav/BurgerMenu';
import "../header/Header.scss";
import { JwtContext } from "../../context/jwtContext"
import { ButtonLogout } from "../../components/ButtonLogout";
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const Header = () => {
  const { jwt} = useContext(JwtContext)
  const email =localStorage.getItem('user')
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      <div>
            <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>    

      <img className='logo' src="/logo3.png" alt="logo" />

      <Link className="nav-li" to="/"></Link>

      {jwt &&(

      <ButtonLogout className="nav-li"></ButtonLogout>  
      )}



    </header>
  );
};

export default Header;
