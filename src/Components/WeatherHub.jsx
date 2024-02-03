import React, { useEffect } from "react";
import WeatherHub_Nav from "./WeatherHub_Nav";
import "../Style/WeatherHub.css";
import { FiSun } from "react-icons/fi";
import axios from "axios";
import { useParams } from "react-router-dom";

function WeatherHub() {
  const { place } = useParams();
  
  const apikey = "a0e9da674faffcda28aede6a39250e7e";
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=1&appid=${apikey}`;
  let lon, lat;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(url).then((response) => {
          lat = response.data[0].lat;
          lon = response.data[0].lon;
        });
        await axios
          .get(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`
          )
          .then((response) => {
            console.log(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div>
      <WeatherHub_Nav />
      <img className="Ellipse" src="/images/Ellipse_login.png" alt="bg" />
      <div className="WeatherHub">
        <h1 className="WeatherHub_title">
          Get live weather and altitude info for your travel spots instantly
        </h1>

        <div className="WeatherHub_Search">
          <div className="WeatherHub-Input">
            <input
              className="WeatherHub-Input"
              type="text"
              id="fname"
              name="fname"
              placeholder="Search Places"
            />
          </div>
          <img
            className="WeatherHub_search-image"
            src="/images/Search Button.png"
            alt="Search"
          />
        </div>
      </div>
      <div className="WeatherHub_main">
        <div className="WeatherHub_right">
          <p className="WeatherHub_right_current_Location">Current Location</p>
          <div className="WeatherHub_right_Location">
            <p className="WeatherHub_right_Location-Name">{place}</p>
            <div className="WeatherHub_right_Location-codinate">
              <a className="WeatherHub_right_Location-codinate1">4,000m</a>
              <a className="WeatherHub_right_Location-codinate1">(3.28ft)</a>
            </div>
          </div>
          <div className="WeatherHub_temp">
            <FiSun className="WeatherHub_temp_icon" />
            <a className="WeatherHub_Temp_lock">23°</a>
            <a className="WeatherHub_temp-C">C</a>
          </div>
          <div className=""></div>
        </div>
        <div className="WeatherHub_left">
          <img
            className="Progress_Bar"
            src="/images/Progress Bar.png"
            alt="Progress Bar"
          />
          <div className="WeatherHub_left_texts">
            <a className="WeatherHub_left_text1" href="#">
              Today
            </a>
            <a className="WeatherHub_left_text2" href="#">
              Tomorrow
            </a>
            <a className="WeatherHub_left_text3" href="#">
              10 Days
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WeatherHub;
