import React from 'react'
import Coldcoffee from './Coldcof';



const {Coldc} = Coldcoffee;
const ColdCoffee = () => {
  return (
    <div className="big">

    <div className="h1">
    <h1>COLD COFFEE</h1>
    </div>
         
    <div className='breakfast'>

   {Coldc.map((cold) =>{
       console.log(cold);
       return( <div className="bfast">
                  <div>
                  <img src={cold.image} alt={cold.name}/>
                  </div>
                  <div className='head'>
                    <h3>{cold.name}</h3>
                    <h5>AED{cold.price}</h5>
                  </div>
                  <div className='detail' >
                    {cold.details}
                    <hr />
                  </div>
               </div>
       )  


   })}
  </div>
  </div>
  )
}

export default ColdCoffee;