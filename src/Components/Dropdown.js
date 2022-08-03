import React, { useState } from "react";
// import styled from "styled-components";
import '../styles/Dropdown.css';
function Dropdown(){

return(
<nav role="navigation">
  <ul>
    <li><a href="#" aria-haspopup="true">All Hotels</a>
      <ul class="dropdown" aria-label="submenu">
        <li className = "hotels"><a  >Hotel Aira Xing</a></li>
        <li className = "hotels"><a  >Hotel Jyoti Mahal</a></li>
        <li className = "hotels"><a >Hotel Pinky Villa</a></li>
        <li className = "hotels"><a  >Hotel Jai Balaji</a></li>
        <li  className = "hotels"><a >Staybook South Delhi</a></li>
        <li className = "hotels"><a  >Shiv Dev International</a></li>
        <li className = "hotels"><a  >Staybook Woods View </a></li>
      </ul>
    </li>
  
  </ul>
</nav>


)

}


export default Dropdown;