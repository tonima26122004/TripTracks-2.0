import React, { useState } from "react";
import '../Style/Navbar.css';
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <div className="NAV">
            <div className="NAV_left">
            <a className="NAV_logo" href="/choose"><img src="/images/TripTracks.png" alt="Logo"/></a> 
            </div>
            <div className="NAV_right">
                <div className="NAV_right_Noti">
                    <img className="NAV_Live" src="/images/Live.svg" alt="Live"/>
                    <Link className="NAV_Weatherhub" to="/weatherHub">WeatherHub</Link>
                </div>
                <img className="NAV_notification" src="/images/Notification.svg" alt="notification"/>
                <img  className="User" src="/images/User_pof.svg" alt="Usre_profile"/>
            </div>

            
        </div>
        
    );
}

export default Navbar;