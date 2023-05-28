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
   
   <div className='containervaca'>
    <div className='burgerlog'>
            <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>    
    <div className='vaca'>
    <img className='logo' src="../SMART FARM (1).svg" alt="logo" />
    </div>
      


      <Link className="nav-li" to="/"></Link>

      {jwt &&(
      <div className='deslo'>
      <ButtonLogout></ButtonLogout>  
      </div>
      )}

    </div> 

    
  );
};

export default Header;
