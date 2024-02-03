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
          if (response.data.length === 1) {
            lat = response.data[0].lat;
            lon = response.data[0].lon;
          } else {
            lat = response.data[1].lat;
            lon = response.data[1].lon;
          }
          console.log(lat, lon);
        });
        await axios
          .get(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`
          )
          .then((response) => {
            setData(response.data.current);
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
      <img className="WeatherHub_Ellipse" src="/images/Ellipse_login.png" alt="bg"/>
      <div className="WeatherHub">
        <h1 className="WeatherHub_title">
          Get live weather and altitude info for your travel spots instantly
        </h1>

        <div className="WeatherHub_Search">
          <div className="WeatherHub_Search_box">
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
      </div>
      <div className="WeatherHub_main">
        <div className="WeatherHub_right">
          <p className="WeatherHub_right_current_Location">Current Location</p>
          <div className="WeatherHub_right_Location">
            <p className="WeatherHub_right_Location-Name">{place}</p>
            <div className="WeatherHub_right_Location-codinate">
              <a className="WeatherHub_right_Location-codinate1">
                {data.pressure}pa
              </a>
            </div>
          </div>
          <div className="WeatherHub_temp">
            <img className="WeatherHub_temp_type"src="/images/01d.png" alt="type"/>
            <p className="WeatherHub_Temp_lock">{Math.round(data.temp)}°</p>
            <p className="WeatherHub_temp-C">C</p>
          </div>

          <div className="WeatherHub_Type">
            <div className="WeatherHub_Type_box">
              <div className="WeatherHub_Humidity_Type">
                <div className="WeatherHub_Humidity_Type_name">
                  <img className="WeatherHub_Type_img" src="/images/Humidity.png" alt="Humidity"/>
                  <p className="WeatherHub_Type_title">Humidity</p>
                </div>
                <p className="WeatherHub_Type_Humidity_data">72%</p>
              </div>
              <div className="WeatherHub_Type">
                <div className="WeatherHub_Type_name">
                  <img className="WeatherHub_Type_img" src="/images/Sunrise.png" alt="Sunrise"/>
                  <p className="WeatherHub_Type_title">Sunrise</p>
                </div>
                
                <p className="WeatherHub_Type_data">06:00 am</p>
              </div>
              <div className="WeatherHub_Type">
                <div className="WeatherHub_Type_name">
                  <img className="WeatherHub_Type_img" src="/images/Rainfall.png" alt="Rainfall"/>
                  <p className="WeatherHub_Type_title">Rainfall</p>
                </div>
                
                <p className="WeatherHub_Type_data">750 mm</p>
              </div>
            </div>

            <div className="WeatherHub_Type_box">
              <div className="WeatherHub_Windspeed_Type">
                <div className="WeatherHub_Windspeed_Type_name">
                  <img className="WeatherHub_Type_img" src="/images/Windspeed.png" alt="Windspeed"/>
                  <p className="WeatherHub_Type_title">Windspeed</p>
                </div>
                
                <p className="WeatherHub_Type_data">2.06 MpH</p>
              </div>
              <div className="WeatherHub_Type">
                <div className="WeatherHub_Type_name">
                  <img className="WeatherHub_Type_img" src="/images/Sunset.png" alt="Sunset"/>
                  <p className="WeatherHub_Type_title">Sunset</p>
                </div>
                <p className="WeatherHub_Type_data">05:30 pm</p>
              </div>
              <div className="WeatherHub_Type">
                <div className="WeatherHub_Type_name">
                  <img className="WeatherHub_Snowfall_Type_img" src="/images/Snowfall.png" alt="Snowfall"/>
                  <p className="WeatherHub_Type_title">Snowfall</p>
                </div>
                <p className="WeatherHub_Type_data">rainfall</p>
              </div>
            </div>
          </div>
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
