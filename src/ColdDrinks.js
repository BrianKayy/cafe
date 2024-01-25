import React from 'react'
import Cdrink from './CDrinks'


const {Colddrink} = Cdrink;
const ColdDrinks = () => {
  return (
    <div className="big">

    <div className="h1">
    <h1>COLD DRINK</h1>
    </div>
         
    <div className='breakfast'>

   {Colddrink.map((drink) =>{
       console.log(drink);
       return( <div className="bfast">
                  <div>
                  <img src={drink.image} alt={drink.name} />
                  </div>
                  <div className='head'>
                    <h3>{drink.name}</h3>
                    <h5>AED{drink.price}</h5>
                  </div>
                  <div className='detail' >
                    {drink.details}
                    <hr />
                  </div>
               </div>
       )  


   })}
  </div>
  </div>
  
  )
}

export default ColdDrinks;