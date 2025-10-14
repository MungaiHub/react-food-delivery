import React from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets';
const Navbar = () => {
  return (
    <div ClassName='navbar'>
    <img src={assets.logo} alt="" className="logo" />
    <ul className="navbar-menu">
      <li>Home</li>
      <li>Menu</li>
      <li>Mobile-app</li>
      <li>Contact Us</li>  
    </ul>
    <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>sign in</button>
    </div>
    </div>
  );
}

export default Navbar;
