import React from 'react';
import Breakfast from "./Breakfast";
import ColdDrinks from "./ColdDrinks";
import Desserts from './Desserts';
import FilterCoffee from './FilterCoffee';
import HotCoffee from './HotCoffee';
import Juice from "./Juice";


const Home = () => {
  return (
    <div className='home'>
      <Breakfast></Breakfast>
      <ColdDrinks></ColdDrinks>
      <Desserts></Desserts>
      <FilterCoffee></FilterCoffee>
      <HotCoffee></HotCoffee>
      <Juice></Juice>
    </div>
    
    

  ) 
}

export default Home;