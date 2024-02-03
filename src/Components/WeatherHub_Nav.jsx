import React, { useState } from "react";
import '../Style/WeatherHub_Nav.css';
import DroupDownProfile from "./Dropdown";

function WeatherHub_Nav(){
    const[openPofile, setOpenPofile] = useState(false)
    return(
        <div>
            <nav>
                <div className="Logo" >
                <a href="/choose/discover"><img src="/images/TripTracks.png" alt="Logo"/></a> 
                </div>
                <div className="rightside">
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

export default WeatherHub_Nav;