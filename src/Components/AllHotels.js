import React from 'react'
import '../styles/AllHotels.css'
import AriaXingImage from "../images/AiraXing.jpg";
import JaiBalajiImage from "../images/JaiBalaji.jpg";
import JyotiMahalImage from "../images/JyotiMahal.jpg";
import PinkyVillaImage from "../images/PinkyVilla.jpg";
function AllHotels() {
  return (

   
<div className = "MainComponent">


   <div className ="allCards">
   <div className = "hotel">
   
   <div className = "hotelName">AiraXing</div>
   <div className = "AiraXing"><img src = {AriaXingImage} className = "AiraXingImage"></img></div>
   <div className = "row">Airport pick-up/drop-off, room service, and complimentary Wi-Fi are all available at Hotel Aira Xing. The budget hotel Aira Xing is a 10-minute drive from the New Delhi Railway Station and the Jhandewalan Metro Station</div>
   <button class="glow-on-hover" type="button">Book Now</button>
   </div>
   <div className = "hotel">
   <div className = "hotelName">JaiBalaji</div>
   <div className = "JaiBalaji"><img src = {JaiBalajiImage} className = "JaiBalajiImage"></img></div>
   <div className = "row">Air - conditioned rooms include a desk, a flat-screen TV, a private bathroom, as well as bed linen and towels. Each room at Hotel Jai Balaji includes a seating space. A continental or à la carte breakfast is available at the hotel.</div>
   <button class="glow-on-hover" type="button">Book Now</button>
   </div>

   <div className = "hotel">
   <div className = "hotelName">JyotiMahal</div>
   <div className = "JyotiMahal"><img src = {JyotiMahalImage} className="JyotiMahalImage"></img></div>
   <div className = "row">The rooms have king-size beds, cable TV, and a large bathroom with hot and cold water 24 hours a day. A balcony is available in some rooms. The Hotel Jyoti Mahal is located little over half a kilometre from Connaught Place.</div>
   <button class="glow-on-hover" type="button">Book Now</button>
   </div>

   <div className = "hotel">
   <div className = "hotelName">PinkyVilla</div>
   <div className = "PinkyVilla"><img src = {PinkyVillaImage} className="PinkyVillaImage"></img></div>
   <div className = "row" >Air conditioning, a flat-screen TV with satellite channels, a fridge, a kettle, a shower, a hairdryer, and a desk are included in all guest rooms. Every room in the hotel has a closet and a private bathroom.</div>
   <button class="glow-on-hover" type="button">Book Now</button>
   </div>

   </div>

</div>


   
  )
}

export default AllHotels