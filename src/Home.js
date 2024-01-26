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
<Link  to='/Breakfast'>BREAKFAST </Link> 
<Link   to='/Desserts'> DESSERTS </Link> 
<Link   to='/HotCoffee'> HOTCOFFEE</Link>
<Link   to='/ColdCoffee'>COLD COFFEE</Link>
<Link   to='/FilterCoffee'> FILTER-COFFEE</Link>
<Link   to='/Frappe'>FRAPPE</Link>
<Link   to='/Juice'> JUICE </Link> 
<Link   to='/Tea'>TEA</Link>
<Link   to='/New'>SUMMER SPECIALS</Link>
<Link   to='/ColdDrinks'>  DRINKS</Link> 
      
      </div>

      </div>
    
      <Breakfast></Breakfast>
      <Desserts></Desserts>
      <HotCoffee></HotCoffee>
      <ColdCoffee></ColdCoffee>
      <FilterCoffee></FilterCoffee>
      <Frappe></Frappe>
      <Juice></Juice>
      <Tea></Tea>
      <New></New>
      <ColdDrinks></ColdDrinks>
  </div> 
   

  ) 
}

export default Home;