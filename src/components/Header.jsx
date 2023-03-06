import React from 'react';

import logo from "../assets/img/logo.svg";

const Header = () =>{

     
    return (
    <header className='Header'>
        <div className="logo">
            <img src={logo} alt="Logo" />
            
        </div>
        
    </header>
    ); 
};
export default Header;