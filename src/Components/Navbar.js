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
    <div className = "TourPackage">Membership Program</div>
    <div className = "TourPackage" >Blogs</div>
    <div className = "TourPackage">Contacts</div>
    <div className = "TourPackage" >My Account</div>
    <div className = "TourPackage">Book</div>
  </div>
  

)


}

export default Navbar;