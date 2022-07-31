import React from 'react';

import logo from "../images/staybookPhoto.png";
import '../styles/Navbar.css';
import  Dropdown  from './Dropdown.js'


function Navbar(){

return (

    <div className="navbar">
    <img src={logo} className="logo"/>
    <Dropdown className = "dropDown"/>
    <div className = "TourPackage">Tour Packages</div>
    <div className = "Membership">Membership Program</div>
    <div className = "Blogs">Blogs</div>
    <div className = "Contacts">Contacts</div>
    <div className = "MyAccount">My Account</div>
    <div className = "Book">Book</div>
  </div>
  

)


}

export default Navbar;