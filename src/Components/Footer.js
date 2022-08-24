import React from 'react'
import JyotiMahalImage from '../images/Hotel.jpg';
import '../styles/Footer.css';
function Footer() {
    const cars = ['Registration', 'Guest Support', 'Guest Feedback' ,'FAQ' ,'Offers' ,'1/5, Desh Bandhu Gupta Rd, opposite paharganj, Motia Khan, Paharganj, New Delhi, Delhi 110055' , 'Instagram' , 'Facebook' , 'Twitter'];
    function Car(props) {
        return <li className= "listText"> { props.brand }</li>;
      }
  return (
    <div className = "MainDiv">
    <img src = {JyotiMahalImage} className = "FooterHotelImage"/>
    <div className = "textHotel">Plan an Unforgettable Experience in Staybook!</div>
    <div className = "randomJargon">We can help you fit your stay and experience within your allotted budget.</div>
    <div className = "callUS">CALL FOR SUPPORT</div>
    <div className = "number">+91- 8373929299</div>
    <div className = "contentWrapper">
    <div className = "listFull">
    <ul className = "List">
        {cars.map((car) => <Car brand={car} />)}
      </ul>
      </div>
      <div ><div className = "touristDiv">Travel And Tourism</div>
      <div className = "TouristText">Staybook offers customised family trips tailored to the needs of any family, large or small, with youngsters or the elderly. It's a fantastic chance to spend quality time together in a fantastic location.</div>
      </div>
      
    </div>
    </div>
  )
}

export default Footer