import React from "react";
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from "./Home";
import Breakfast from "./Breakfast";
import ColdDrinks from "./ColdDrinks";
import Desserts from './Desserts';
import FilterCoffee from './FilterCoffee';
import HotCoffee from './HotCoffee';
import Juice from "./Juice";
import Footer from "./Footer";
import Tea from './Tea';
import Frappe from './Frappe';
import ColdCoffee from './ColdCoffee'
import New from './New'
function App() {

  return (
  
     <Router>
        <div className="App">
            <Navbar/>
             <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/Breakfast" element={<Breakfast />}/>
              <Route path="/ColdDrinks" element={<ColdDrinks />}/>
              <Route path="/Desserts" element={<Desserts />}/>
              <Route path="/FilterCoffee" element={<FilterCoffee />}/>
              <Route path="/HotCoffee" element={<HotCoffee />}/>
              <Route path="/Juice" element={<Juice />}/>
              <Route path="/Tea" element={<Tea />}/>
              <Route path="/Frappe" element={<Frappe />}/>
              <Route path="/ColdCoffee" element={<ColdCoffee />}/>
              <Route path="/New" element={<New />}/>
             </Routes>
              <Footer/>
        </div>
  
     </Router>
     
  );
}

export default App;
