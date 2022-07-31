import React from 'react'
import '../styles/AllHotels.css'
import AriaXingImage from "../images/AiraXing.jpg";
import JaiBalajiImage from "../images/JaiBalaji.jpg";
import JyotiMahalImage from "../images/JyotiMahal.jpg";
import PinkyVillaImage from "../images/PinkyVilla.jpg";
function AllHotels() {
  return (

   
<div className = "MainComponent">
<table>
  <tr>
    <th size = "100px">AiraXing</th>
    <th size = "100px">JaiBalaji</th>
    <th size = "100px">JyotiMahal</th>
   <th size = "100px">PinkyVilla</th>
  </tr>
  <tr className = "AllHotelImages">
  
    <th className = "AiraXing"><img src = {AriaXingImage} className = "AiraXingImage"></img></th>
    <td className = "JaiBalaji"><img src = {JaiBalajiImage} className = "JaiBalajiImage"></img></td>
    <td className = "JyotiMahal"><img src = {JyotiMahalImage} className="JyotiMahalImage"></img></td>
    <td className = "PinkyVilla"><img src = {PinkyVillaImage} className="PinkyVillaImage"></img></td>

  </tr>
  <tr>
    {/* <td>Centro comercial Moctezuma</td>

    <td>Mexico</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    
    <td>Mexico</td> */}
  </tr>
</table>
</div>


   
  )
}

export default AllHotels