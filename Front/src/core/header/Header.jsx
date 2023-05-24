import React, { useState } from 'react';
import BurgerMenu from '../nav/BurgerMenu';
import "../header/Header.scss"

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      <div>
            <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>    

      <img className='logo' src="../public/logo.png" alt="logo" />
      <img src="../public/out.png" alt="" />
    </header>
  );
};

export default Header;
