import React from 'react'
import Juic from './mydata6';

const {juice} = Juic;
const Juice = () => {
  return (
    <div className="big">

    <div className="h1">
    <h1>COLD DRINK</h1>
    </div>
         
    <div className='breakfast'>

   {juice.map((Jui) =>{
       console.log(Jui);
       return( <div className="bfast">
                  <div>
                  <img src={Jui.image} alt={Jui.name} />
                  </div>
                  <div className='head'>
                    <h3>{Jui.name}</h3>
                    <h5>AED{Jui.price}</h5>
                  </div>
                  <div className='detail' >
                    {Jui.details}
                    <hr />
                  </div>
               </div>
       )  
   })}
  </div>
  </div>
  
  )
}

export default Juice;