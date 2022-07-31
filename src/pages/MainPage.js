import React from 'react'
import Navbar from'../Components/Navbar.js';
import ImageAndBody from'../Components/ImageAndBody.js';
import AllHotels from'../Components/AllHotels.js';
import '../styles/MainPage.css';
function MainPage() {
return (
    <>
    <Navbar />
    <ImageAndBody />
    <div className = "normalText">Best Hotels in Delhi -</div>
    <AllHotels />
    <hr className = "line"></hr>
    </>




)
}

export default MainPage;