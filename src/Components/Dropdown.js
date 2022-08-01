import React, { useState } from "react";
// import styled from "styled-components";
import '../styles/Dropdown.css';
function Dropdown(){

return(
<nav role="navigation">
  <ul>
    <li><a href="#" aria-haspopup="true">All Hotels</a>
      <ul class="dropdown" aria-label="submenu">
        <li><a href="#">Hotel Aira Xing</a></li>
        <li><a href="#">Sub-2</a></li>
        <li><a href="#">Sub-3</a></li>
      </ul>
    </li>
  
  </ul>
</nav>


)

}


export default Dropdown;