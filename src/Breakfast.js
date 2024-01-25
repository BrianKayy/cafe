import React from 'react'
import Bfast from './myData';


const {BreakFast} = Bfast;
const  Breakfast = () => {
  return (
    <div className="big">

      <div className="h1">
      <h1>BREAKFAST</h1>
      </div>
           
      <div className='breakfast'>

     {BreakFast.map((fast) =>{
         console.log(fast);
         return( <div className="bfast">
                    <div>
                    <img src={fast.image} alt="fast.name" />
                    </div>
                    <div className='head'>
                      <h3>{fast.name}</h3>
                      <h5>AED{fast.price}</h5>
                    </div>
                    <div className='detail' >
                      {fast.details}
                      <hr />
                    </div>
                 </div>
         )  


     })}
    </div>
    </div>
    
  )
}

export default Breakfast;