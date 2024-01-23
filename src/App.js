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
             </Routes>
              <Footer/>
        </div>
  
     </Router>
     
  );
}

export default App;
