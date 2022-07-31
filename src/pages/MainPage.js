import React from 'react'
import Navbar from'../Components/Navbar.js';
import ImageAndBody from'../Components/ImageAndBody.js';
import AllHotels from'../Components/AllHotels.js';
import TopDestinations from'../Components/TopDestinations';
import StayBookLife from'../Components/StayBookLife.js';
import AmenetiesAndFacalities from'../Components/AmenetiesAndFacalities';
import '../styles/MainPage.css';
function MainPage() {
return (
    <>
    <Navbar />
    <ImageAndBody />
    <div className = "normalText" >Best Hotels in Delhi -</div>
    <AllHotels />
    <hr className = "line"></hr>
    <TopDestinations />
    <hr className = "line"></hr>
    <StayBookLife/>
    <hr className = "line"></hr>
    <AmenetiesAndFacalities />
    </>




)
}

export default MainPage;