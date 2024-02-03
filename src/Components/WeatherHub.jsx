import React from "react";
import WeatherHub_Nav from "./WeatherHub_Nav";
import '../Style/WeatherHub.css';
import { FiSun } from "react-icons/fi";
function WeatherHub() {
    return(
        <div>
            <WeatherHub_Nav/>
            <img className="Ellipse" src="/images/Ellipse_login.png" alt="bg"/>
            <div className="WeatherHub">
                <h1 className="WeatherHub_title">Get live weather and altitude info for your travel spots instantly</h1>
                
                <div className="WeatherHub_Search">
                    <div className="WeatherHub-Input">
                        <input className="WeatherHub-Input" type="text" id="fname" name="fname" placeholder="Search Places"/>
                    </div>
                    <img className="WeatherHub_search-image" src="/images/Search Button.png" alt="Search"/>
                </div>
            </div>
            <div className="WeatherHub_main">
                <div className="WeatherHub_right">
                    <a className="WeatherHub_right_current_Location">Current Location</a>
                    <div className="WeatherHub_right_Location">
                        <a className="WeatherHub_right_Location-Name">Current Location</a>
                        <div className="WeatherHub_right_Location-codinate">
                            <a className="WeatherHub_right_Location-codinate1">4,000m</a>
                            <a className="WeatherHub_right_Location-codinate1">(3.28ft)</a>
                        </div>
                    </div>
                    <div className="WeatherHub_temp">
                        <FiSun className="WeatherHub_temp_icon"/>
                        <a className="WeatherHub_Temp_lock">23°</a>
                        <a className="WeatherHub_temp-C">C</a>
                    </div>
                    <div className=""></div>
                </div>
                <div className="WeatherHub_left">
                    <img className="Progress_Bar" src="/images/Progress Bar.png" alt="Progress Bar"/>
                    <div className="WeatherHub_left_texts">
                        <a className="WeatherHub_left_text1" href="#">Today</a>
                        <a className="WeatherHub_left_text2" href="#">Tomorrow</a>
                        <a className="WeatherHub_left_text3" href="#">10 Days</a>
                    </div>
                </div>
            </div>
            
            
        </div>
        
    );
}
export default WeatherHub;