import React, { useState } from "react";
import '../Style/Navbar.css';
import { Link } from "react-router-dom";
import DroupDownProfile from "./Dropdown";
import { FaBarsStaggered } from "react-icons/fa6";


function Navbar(){
    const[openPofile, setOpenPofile] = useState(false)
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
                <button className="User" onClick={() => setOpenPofile((perv) =>!perv)}><FaBarsStaggered size={35} /></button>
                
            </div>
            {
                    openPofile &&  <DroupDownProfile/>
                }
               
        </div>
        
    );
}

export default Navbar;