import React from 'react';
import { useRef } from 'react';
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
import ScrolltoTop from './ScrolltoTop';

const Home = () => {
  const  breakfast = useRef(null);
  const  desserts = useRef(null);
  const  hotcoffee = useRef(null);
  const  coldcoffee = useRef(null);
  const  filtercoffee = useRef(null);
  const  frappe = useRef(null);
  const  juice = useRef(null);
  const  tea = useRef(null);
  const  summer = useRef(null);
  const  drinks = useRef(null);

  const scrollToSection = (elementRef)=>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
  <div className='home'>
    <ScrolltoTop/>
  <div className="navbar">
    <div className="bottom">
      <ul> 
<li onClick={()=>scrollToSection(breakfast)} >BREAKFAST</li> 
<li onClick={()=>scrollToSection(desserts)}  >DESSERTS</li> 
<li onClick={()=>scrollToSection(hotcoffee)}  >HOTCOFFEE</li>
<li  onClick={()=>scrollToSection(coldcoffee)} >COLD COFFEE</li>
<li  onClick={()=>scrollToSection(filtercoffee)} >FILTER-COFFEE</li>
<li  onClick={()=>scrollToSection(frappe)} >FRAPPE</li>
<li onClick={()=>scrollToSection(juice)}  > JUICE </li> 
<li onClick={()=>scrollToSection(tea)}  >TEA</li>
<li  onClick={()=>scrollToSection(summer)} >SUMMER-SPECIALS</li>
<li onClick={()=>scrollToSection(drinks)}>DRINKS</li> 
      </ul>
      </div>

      </div>
       <div ref={breakfast}><Breakfast ></Breakfast></div>
       <div ref={desserts}><Desserts></Desserts></div>
       <div ref={hotcoffee}><HotCoffee ></HotCoffee></div>
       <div ref={coldcoffee}><ColdCoffee ></ColdCoffee></div>
       <div ref={filtercoffee}><FilterCoffee ></FilterCoffee></div>
      <div ref={frappe}><Frappe ></Frappe></div>
      <div ref={juice}><Juice ></Juice></div>
      <div ref={tea}><Tea ></Tea></div>
      <div ref={summer}><New></New></div>
       <div ref={drinks}><ColdDrinks ></ColdDrinks></div>
      
  </div> 
   

  ) 
}

export default Home;