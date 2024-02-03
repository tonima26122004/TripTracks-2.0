import React, { useState, useEffect } from "react";
import WeatherHub_Nav from "./WeatherHub_Nav";
import "../Style/WeatherHub.css";
import { FiSun } from "react-icons/fi";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function WeatherHub() {
  const [activeTab, setActiveTab] = useState("tab1");
  const { place } = useParams();
  const [data, setData] = useState({});
  
  const styles = {
    active: {
      color: "#402E32",
    },
    inactive: {
      opacity: "0.4",
    },
  };

  const apikey = "a0e9da674faffcda28aede6a39250e7e";
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=2&appid=${apikey}`;
  let lon, lat;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(url).then((response) => {
          lat = response.data[1].lat;
          lon = response.data[1].lon;
          console.log(lat, lon)
        });
        await axios
          .get(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`
          )
          .then((response) => {setData(response.data.current)});
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
              <a className="WeatherHub_right_Location-codinate1">{data.pressure}pa</a>
            </div>
          </div>
          <div className="WeatherHub_temp">
            <FiSun className="WeatherHub_temp_icon" />
            <a className="WeatherHub_Temp_lock">{Math.round(data.temp)}°</a>
            <a className="WeatherHub_temp-C">C</a>
          </div>
          <div className=""></div>
        </div>
        <div className="WeatherHub_left">
          <div className="WeatherHub_left_texts">
            <Link
              className="WeatherHub_left_text1"
              to={`/weatherHub/${place}`}
              style={activeTab === "tab1" ? styles.active : styles.inactive}
              onClick={() => setActiveTab("tab1")}
            >
              Today
            </Link>
            <Link
              className="WeatherHub_left_text2"
              to={`/weatherHub/${place}/tomorrow`}
              style={activeTab === "tab2" ? styles.active : styles.inactive}
              onClick={() => setActiveTab("tab2")}
            >
              Tomorrow
            </Link>
            <Link
              className="WeatherHub_left_text3"
              to={`/weatherHub/${place}/7days`}
              style={activeTab === "tab3" ? styles.active : styles.inactive}
              onClick={() => setActiveTab("tab3")}
            >
              7 Days
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WeatherHub;
