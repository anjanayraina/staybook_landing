import React, { useState } from "react";
// import styled from "styled-components";
import '../styles/Dropdown.css';
function Dropdown(){

return(
<nav role="navigation">
  <ul>
    <li><a href="#" aria-haspopup="true">All Hotels</a>
      <ul class="dropdown" aria-label="submenu">
        <li className = "hotels"><a href="#" >Hotel Aira Xing</a></li>
        <li className = "hotels"><a href="#" >Hotel Jyoti Mahal</a></li>
        <li className = "hotels"><a href="#" >Hotel Pinky Villa</a></li>
        <li className = "hotels"><a href="#" >Hotel Jai Balaji</a></li>
        <li  className = "hotels"><a href="#">Staybook South Delhi</a></li>
        <li className = "hotels"><a href="#" >Shiv Dev International</a></li>
        <li className = "hotels"><a href="#" >Staybook Woods View </a></li>
      </ul>
    </li>
  
  </ul>
</nav>


)

}


export default Dropdown;