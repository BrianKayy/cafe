import React from 'react'
import { Link } from 'react-router-dom';
import logo from './images/logo2.jpg';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="top">
            <img src={logo} alt="" />
            <div className="links">
            <Link to='/'>MENU</Link>
            <Link to="/About">ABOUT</Link>
            <Link to="/Contact">CONTACT</Link>
            </div>
           
        </div>
        
    </div>
  )
}

export default Navbar;