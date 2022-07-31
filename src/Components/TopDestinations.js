import React from 'react'
import '../styles/TopDestinations.css';
import destinationImage from '../images/Destinations.jpg';
function TopDestinations() {
  return (
   

<div className ="header">Top Destinations
<div className = "container">
<img src = {destinationImage} className = "destinationImage"></img>
<div className = "wrapper">
<div className = "text">Surrounded by scenic beauty and attractive tourist attractions we make it convenient for you to visit all the beautiful places with our inhouse guide. We can also help you arrange transport facilities for an easier commute to nearby places.</div>
<div className = "bookButton">Know More</div> 
</div>

    </div>
    </div>
  )
}

export default TopDestinations;