import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="top">
            <header>THE SEAT CAFE</header>
            <div className="links">
            <Link to='/'>MENU</Link>
            <div class="vl"></div>
            <Link to="/About">ABOUT</Link>
            <div class="vl"></div>
            <Link>CONTACT</Link>
            </div>
           
        </div>
        
    </div>
  )
}

export default Navbar;