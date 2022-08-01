import React from 'react';
import image from "../images/hotelimage.jpg";
import '../styles/ImageAndBody.css'
 function ImageAndBody() {
  return (
    <div className ="container">
    <img src={image} alt="Logo" className = "HotelImage"/>
    <div className ="centered">Budget Hotels at Every Corner of India</div>
   
  </div>
  )
}

export default ImageAndBody;