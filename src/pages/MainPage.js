import React from 'react'
import Navbar from'../Components/Navbar.js';
import ImageAndBody from'../Components/ImageAndBody.js';
import AllHotels from'../Components/AllHotels.js';
import TopDestinations from'../Components/TopDestinations';
import StayBookLife from'../Components/StayBookLife.js';
import AmenetiesAndFacalities from'../Components/AmenetiesAndFacalities';
import Footer from '../Components/Footer.js';
import '../styles/MainPage.css';
function MainPage() {
return (
    <div className = "MainBody">
    <Navbar />
    <ImageAndBody />
    <div className = "normalText" >Best Hotels in Delhi -</div>
    <AllHotels />
    
    <TopDestinations />
    
    <StayBookLife/>
    
    <AmenetiesAndFacalities />

    <Footer/>
    </div>




)
}

export default MainPage;