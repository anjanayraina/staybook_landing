import React from 'react'
import AriaXingImage from "../images/AiraXing.jpg";
import JaiBalajiImage from "../images/JaiBalaji.jpg";
import JyotiMahalImage from "../images/JyotiMahal.jpg";
import PinkyVillaImage from "../images/PinkyVilla.jpg";
function AmenetiesFacalitiesTable() {
  return (
    <div className = "container">
<table>
  <tr>
    <th size = "100px">24 Hour Helpdesk</th>
    <th size = "100px">Room Service</th>
    <th size = "100px">In-house Restaurants</th>
 
  </tr>
  <tr className = "AllHotelImages">
  
    <th className = "AiraXing"><img src = {AriaXingImage} className = "AiraXingImage"></img></th>
    <td className = "JaiBalaji"><img src = {JaiBalajiImage} className = "JaiBalajiImage"></img></td>
    <td className = "JyotiMahal"><img src = {JyotiMahalImage} className="JyotiMahalImage"></img></td>
 

  </tr>
  <tr>
  <tr className = "textRow">
    <th className = "row">Airport pick-up/drop-off, room service, and complimentary Wi-Fi are all available at Hotel Aira Xing. The budget hotel Aira Xing is a 10-minute drive from the New Delhi Railway Station and the Jhandewalan Metro Station</th>
    <th className = "row">Air - conditioned rooms include a desk, a flat-screen TV, a private bathroom, as well as bed linen and towels. Each room at Hotel Jai Balaji includes a seating space. A continental or à la carte breakfast is available at the hotel.</th>
    <th className = "row">The rooms have king-size beds, cable TV, and a large bathroom with hot and cold water 24 hours a day. A balcony is available in some rooms. The Hotel Jyoti Mahal is located little over half a kilometre from Connaught Place.
</th>
  
  </tr>
  </tr>
</table>

    </div>
  )
}

export default AmenetiesFacalitiesTable;