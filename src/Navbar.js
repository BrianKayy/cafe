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
            <Link>ABOUT</Link>
            <div class="vl"></div>
            <Link>CONTACT</Link>
            </div>
           
        </div>
        <div className="bottom">
          
            <Link to='/Breakfast'>BREAKFAST <hr /></Link>
            <Link to='/Desserts'> DESSERTS <hr /></Link>
            <Link to='/ColdDrinks'>  DRINKS<hr /></Link>
            <Link to='/HotCoffee'> HOTCOFFEE<hr /></Link>
            <Link to='/FilterCoffee'> FILTER-COFFEE<hr /></Link>
            <Link to="/ColdCoffee">COLD COFFEE<hr /></Link>
            <Link to='/Juice'> JUICE <hr /></Link>
            <Link to="/Tea">TEA<hr /></Link>
            <Link to="/Frappe">FRAPPE<hr /></Link>
            <Link>NEW<hr /></Link>
        </div>
    </div>
  )
}

export default Navbar;