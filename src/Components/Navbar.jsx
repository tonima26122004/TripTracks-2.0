import React, { useState } from "react";
import '../style/Navbar.css';
import DroupDownProfile from "./Dropdown";

function Navbar(){
    const[openPofile, setOpenPofile] = useState(false)
    return(
        <div>
            <nav>
                <div className="Logo" >
                <a href="/Home"><img src="/images/TripTracks.png" alt="Logo"/></a> 
                </div>
                <div className="rightside">
                    <img className="Live" src="/images/Live.svg" alt="Live"/>
                    <a href="/WeatherHub">WeatherHub</a>
                    <img className="notification" src="/images/Notification.svg" alt="notification"/>
                    <img  className="User" onClick={() => setOpenPofile((perv) =>!perv)} src="/images/User_pof.svg" alt="Usre_profile"/>
                </div>
                {
                    openPofile &&  <DroupDownProfile/>
                }
               
            </nav>
            
        </div>
        
    );
}

export default Navbar;