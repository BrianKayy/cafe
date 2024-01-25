import React from 'react';
import { Link } from 'react-router-dom';
import Breakfast from "./Breakfast";
import ColdDrinks from "./ColdDrinks";
import Desserts from './Desserts';
import FilterCoffee from './FilterCoffee';
import HotCoffee from './HotCoffee';
import Juice from "./Juice";
import ColdCoffee from './ColdCoffee';
import New from './New';
import Tea from './Tea'
import Frappe from './Frappe'


const Home = () => {
  return (
    <div className='home'>
            <div className="navbar">
    <div className="bottom">
      
      <Link to='/Breakfast'>BREAKFAST <hr /></Link>
      <Link to='/Desserts'> DESSERTS <hr /></Link>
      <Link to='/ColdDrinks'>  DRINKS<hr /></Link>
      <Link to='/HotCoffee'> HOTCOFFEE<hr /></Link>
      <Link to='/FilterCoffee'> FILTER-COFFEE<hr /></Link>
      <Link to='/ColdCoffee'>COLD COFFEE<hr /></Link>
      <Link to='/Juice'> JUICE <hr /></Link>
      <Link to='/Tea'>TEA<hr /></Link>
      <Link to='/Frappe'>FRAPPE<hr /></Link>
      <Link to='/New'>SUMMER SPECIALS<hr /></Link>
  </div>
    </div>
      <Breakfast></Breakfast>
      <HotCoffee></HotCoffee>
      <ColdCoffee></ColdCoffee>
      <FilterCoffee></FilterCoffee>
      <Frappe></Frappe>
      <Desserts></Desserts>
      <Juice></Juice>
      <Tea></Tea>
      <ColdDrinks></ColdDrinks>
      <New></New>
    </div>
    
    

  ) 
}

export default Home;