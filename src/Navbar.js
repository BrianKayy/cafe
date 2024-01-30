import React from 'react'
import { Link } from 'react-router-dom';
import logo from './images/logo1.jpeg';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="top">
            <img src={logo} alt="" />
            <div className="links">
            <Link to='/'>MENU</Link>
            <Link to="/About">ABOUT</Link>
            <Link>CONTACT</Link>
            </div>
           
        </div>
        
    </div>
  )
}

export default Navbar;