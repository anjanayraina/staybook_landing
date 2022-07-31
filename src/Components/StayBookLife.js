import React from 'react'
import '../styles/StayBookLife.css';
import destinationImage from '../images/Destinations.jpg';
function StayBookLife() {
  return (
   

<div className ="header">Experience the Staybook life
<div className = "container">
<img src = {destinationImage} className = "destinationImage"></img>
<div className = "wrapper">
<div className = "text">We will help you experience life in staybook true sense. From living among the residents to eating authentic delicacies you are sure to walk home with memories and wonderful moments.</div>
<div className = "bookButton">Know More</div> 
</div>

    </div>
    </div>
  )
}

export default StayBookLife;