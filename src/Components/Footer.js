import React from 'react'
import JyotiMahalImage from '../images/Hotel.jpg';
import '../styles/Footer.css';
function Footer() {
  return (
    <div className = "MainDiv">
    <img src = {JyotiMahalImage} className = "FooterHotelImage"/>
    <div className = "textHotel">Plan an Unforgettable Experience in Staybook!</div>
    <div className = "randomJargon">We can help you fit your stay and experience within your allotted budget.</div>
    <div className = "callUS">CALL FOR SUPPORT</div>
    <div className = "number">+91- 8373929299</div>
    </div>
  )
}

export default Footer