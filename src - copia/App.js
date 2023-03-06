import React, { useState } from "react";
import './styles/default.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/MenuNav";
import Index from "./components/Index";
import Buy from "./components/Buy";
import Header from "./components/Header";
import Group from "./components/Group";
import Budget from "./components/Budget";
import Provider from "./components/Provider";
import TranferBudget from "./components/TransferBudget";
import MoneyChange from "./components/MoneyChange";


  

function App() {

  function App() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };


  return (

    <>
      <Header/>
      <button className="BtnNav" id="btn_nav" onClickCapture={MsjAlert}>Menú</button>
      <div className="Main">
        <BrowserRouter>
        
            <Nav/>  
            <Routes>
              <Route path="/" element={<Index/>}/>
              <Route path="/buy" element={<Buy/>}/>
              <Route path="/group" element={<Group/>}/>
              <Route path="/budget" element={<Budget/>}/>
              <Route path="/provider" element={<Provider/>}/>
              <Route path="/MoneyChange" element={<MoneyChange/>}/>
              <Route path="/tranfer_budget" element={<TranferBudget/>}/>
            </Routes>
        </BrowserRouter>
      </div>
      
    </>
    
  );
}

export default App;
