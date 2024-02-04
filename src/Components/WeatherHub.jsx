import React, { useState, useEffect } from "react";
import WeatherHub_Nav from "./WeatherHub_Nav";
import "../Style/WeatherHub.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function WeatherHub() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [tempa, setTempa] = useState([]);
  const { place } = useParams();
  const [data, setData] = useState({});
  const [newdata, setnewData] = useState({});
  const temp = document.getElementsByClassName("temp");
  const humidity = document.getElementsByClassName("humidity");
  const pressure = document.getElementsByClassName("pressure");
  const sunrise = document.getElementsByClassName("sunrise");
  const rain = document.getElementsByClassName("rain");
  const wind = document.getElementsByClassName("wind");
  const sunset = document.getElementsByClassName("sunset");
  const name = document.getElementsByClassName("nameplace");
  const input = document.getElementsByClassName("place");
  let url = "";

  const styles = {
    active: {
      color: "#402E32",
    },
    inactive: {
      opacity: "0.4",
    },
  };

  const apikey = "a0e9da674faffcda28aede6a39250e7e";

  useEffect(() => {
    url = `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=2&appid=${apikey}`;

    let lon, lat;
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
          console.log(place);
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

    place && fetchData();
  }, []);

  const Search = async () => {
    url = `http://api.openweathermap.org/geo/1.0/direct?q=${input[0].value}&limit=2&appid=${apikey}`;
    let lon, lat;
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
          if (activeTab === "tab1") {
            setnewData(response.data.daily[0]);
            temp[0].innerHTML = Math.round(newdata.temp.day) + "°";
            name[0].innerHTML = input[0].value;
            pressure[0].innerHTML = newdata.pressure + "pa";
            humidity[0].innerHTML = newdata.humidity + "%";
            sunrise[0].innerHTML = new Date(
              newdata.sunrise * 1000
            ).toLocaleTimeString();
            rain[0].innerHTML = newdata.dew_point + "mm";
            wind[0].innerHTML = newdata.wind_speed + "KpH";
            sunset[0].innerHTML = new Date(
              newdata.sunset * 1000
            ).toLocaleTimeString();
          } else if (activeTab === "tab2") {
            setnewData(response.data.daily[1]);
            temp[0].innerHTML = Math.round(newdata.temp.day) + "°";
            name[0].innerHTML = input[0].value;
            pressure[0].innerHTML = newdata.pressure + "pa";
            humidity[0].innerHTML = newdata.humidity + "%";
            sunrise[0].innerHTML = new Date(
              newdata.sunrise * 1000
            ).toLocaleTimeString();
            rain[0].innerHTML = newdata.dew_point + "mm";
            wind[0].innerHTML = newdata.wind_speed + "KpH";
            sunset[0].innerHTML = new Date(
              newdata.sunset * 1000
            ).toLocaleTimeString();
          } else if (activeTab === "tab3") {
            const daily = response.data.daily;
            console.log(daily);
            for (let i = 0; i < daily.length; i++) {
              console.log(daily[i].temp.day);
              setTempa((prev) => [...prev, daily[i].temp.day]);
            }
            console.log(tempa);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <WeatherHub_Nav />
      <img
        className="WeatherHub_Ellipse"
        src="/images/Ellipse_login.png"
        alt="bg"
      />
      <div className="WeatherHub">
        <h1 className="WeatherHub_title">
          Get live weather and altitude info for your travel spots instantly
        </h1>

        <div className="WeatherHub_Search">
          <div className="WeatherHub_Search_box">
            <div className="WeatherHub-Input">
              <input
                className="WeatherHub-Input border-none outline-none place"
                type="text"
                id="fname"
                name="fname"
                placeholder="Search Places"
              />
            </div>
            <img
              className="WeatherHub_search-image"
              src="/images/Search Button.png"
              onClick={Search}
              alt="Search"
            />
          </div>
        </div>
      </div>

      <div className="WeatherHub_main">
        {(activeTab === "tab1" && (
          <div className="WeatherHub_right">
            <p className="WeatherHub_right_current_Location">
              Current Location
            </p>
            <div className="WeatherHub_right_Location">
              <p className="WeatherHub_right_Location-Name nameplace">
                {place}
              </p>
              <div className="WeatherHub_right_Location-codinate">
                <a className="WeatherHub_right_Location-codinate1 pressure">
                  {data.pressure}pa
                </a>
              </div>
            </div>
            <div className="WeatherHub_temp">
              <img
                className="WeatherHub_temp_type"
                src="/images/01d.png"
                alt="type"
              />
              <p className="WeatherHub_Temp_lock temp">{data.temp}°</p>
              <p className="WeatherHub_temp-C">C</p>
            </div>

            <div className="WeatherHub_Type">
              <div className="WeatherHub_Type_box">
                <div className="WeatherHub_Humidity_Type">
                  <div className="WeatherHub_Humidity_Type_name">
                    <img
                      className="WeatherHub_Type_img"
                      src="/images/Humidity.png"
                      alt="Humidity"
                    />
                    <p className="WeatherHub_Type_title">Humidity</p>
                  </div>
                  <p className="WeatherHub_Type_Humidity_data humidity">72%</p>
                </div>
                <div className="WeatherHub_Type">
                  <div className="WeatherHub_Type_name">
                    <img
                      className="WeatherHub_Type_img"
                      src="/images/Sunrise.png"
                      alt="Sunrise"
                    />
                    <p className="WeatherHub_Type_title">Sunrise</p>
                  </div>

                  <p className="WeatherHub_Type_data sunrise">06:00 am</p>
                </div>
                <div className="WeatherHub_Type">
                  <div className="WeatherHub_Type_name">
                    <img
                      className="WeatherHub_Type_img"
                      src="/images/Rainfall.png"
                      alt="Rainfall"
                    />
                    <p className="WeatherHub_Type_title">Rainfall</p>
                  </div>

                  <p className="WeatherHub_Type_data rain">750 mm</p>
                </div>
              </div>

              <div className="WeatherHub_Type_box">
                <div className="WeatherHub_Windspeed_Type">
                  <div className="WeatherHub_Windspeed_Type_name">
                    <img
                      className="WeatherHub_Type_img"
                      src="/images/Windspeed.png"
                      alt="Windspeed"
                    />
                    <p className="WeatherHub_Type_title">Windspeed</p>
                  </div>

                  <p className="WeatherHub_Type_data wind">2.06 MpH</p>
                </div>
                <div className="WeatherHub_Type">
                  <div className="WeatherHub_Type_name">
                    <img
                      className="WeatherHub_Type_img"
                      src="/images/Sunset.png"
                      alt="Sunset"
                    />
                    <p className="WeatherHub_Type_title">Sunset</p>
                  </div>
                  <p className="WeatherHub_Type_data sunset">05:30 pm</p>
                </div>
              </div>
            </div>
          </div>
        )) ||
          (activeTab === "tab2" && (
            <div className="WeatherHub_right">
              <p className="WeatherHub_right_current_Location">
                Current Location
              </p>
              <div className="WeatherHub_right_Location">
                <p className="WeatherHub_right_Location-Name nameplace">
                  {place}
                </p>
                <div className="WeatherHub_right_Location-codinate">
                  <a className="WeatherHub_right_Location-codinate1 pressure">
                    {data.pressure}pa
                  </a>
                </div>
              </div>
              <div className="WeatherHub_temp">
                <img
                  className="WeatherHub_temp_type"
                  src="/images/01d.png"
                  alt="type"
                />
                <p className="WeatherHub_Temp_lock temp">{data.temp}°</p>
                <p className="WeatherHub_temp-C">C</p>
              </div>

              <div className="WeatherHub_Type">
                <div className="WeatherHub_Type_box">
                  <div className="WeatherHub_Humidity_Type">
                    <div className="WeatherHub_Humidity_Type_name">
                      <img
                        className="WeatherHub_Type_img"
                        src="/images/Humidity.png"
                        alt="Humidity"
                      />
                      <p className="WeatherHub_Type_title">Humidity</p>
                    </div>
                    <p className="WeatherHub_Type_Humidity_data humidity">
                      72%
                    </p>
                  </div>
                  <div className="WeatherHub_Type">
                    <div className="WeatherHub_Type_name">
                      <img
                        className="WeatherHub_Type_img"
                        src="/images/Sunrise.png"
                        alt="Sunrise"
                      />
                      <p className="WeatherHub_Type_title">Sunrise</p>
                    </div>

                    <p className="WeatherHub_Type_data sunrise">06:00 am</p>
                  </div>
                  <div className="WeatherHub_Type">
                    <div className="WeatherHub_Type_name">
                      <img
                        className="WeatherHub_Type_img"
                        src="/images/Rainfall.png"
                        alt="Rainfall"
                      />
                      <p className="WeatherHub_Type_title">Rainfall</p>
                    </div>

                    <p className="WeatherHub_Type_data rain">750 mm</p>
                  </div>
                </div>

                <div className="WeatherHub_Type_box">
                  <div className="WeatherHub_Windspeed_Type">
                    <div className="WeatherHub_Windspeed_Type_name">
                      <img
                        className="WeatherHub_Type_img"
                        src="/images/Windspeed.png"
                        alt="Windspeed"
                      />
                      <p className="WeatherHub_Type_title">Windspeed</p>
                    </div>

                    <p className="WeatherHub_Type_data wind">2.06 MpH</p>
                  </div>
                  <div className="WeatherHub_Type">
                    <div className="WeatherHub_Type_name">
                      <img
                        className="WeatherHub_Type_img"
                        src="/images/Sunset.png"
                        alt="Sunset"
                      />
                      <p className="WeatherHub_Type_title">Sunset</p>
                    </div>
                    <p className="WeatherHub_Type_data sunset">05:30 pm</p>
                  </div>
                </div>
              </div>
            </div>
          )) ||
          (activeTab === "tab3" && (
            <div className="WeatherHub_right">
              <p className="WeatherHub_right_current_Location">
                Current Location
              </p>
              <div className="WeatherHub_right_Location">
                <p className="WeatherHub_right_Location-Name nameplace">
                  {input[0].value}
                </p>
              </div>
              <div className="WeatherHub_Type">
                <div className="WeatherHub_Type_box">
                  <div className="WeatherHub_Humidity_Type">
                    <p className="WeatherHub_Type_title">Day 3</p>
                    <p className="WeatherHub_Type_Humidity_data humidity">
                      {tempa[2] ? tempa[2] : ""}
                    </p>
                  </div>
                  <div className="WeatherHub_Humidity_Type">
                    <p className="WeatherHub_Type_title">Day 4</p>
                    <p className="WeatherHub_Type_Humidity_data humidity">
                      {tempa[3] ? tempa[3] : ""}
                    </p>
                  </div>
                  <div className="WeatherHub_Humidity_Type">
                    <p className="WeatherHub_Type_title">Day 5</p>
                    <p className="WeatherHub_Type_Humidity_data humidity">
                      {tempa[4] ? tempa[4] : ""}
                    </p>
                  </div>
                </div>

                <div className="WeatherHub_Type_box">
                  <div className="WeatherHub_Humidity_Type">
                    <p className="WeatherHub_Type_title">Day 6</p>
                    <p className="WeatherHub_Type_Humidity_data humidity">
                      {tempa[5] ? tempa[5] : ""}
                    </p>
                  </div>
                  <div className="WeatherHub_Humidity_Type">
                    <p className="WeatherHub_Type_title">Day 7</p>
                    <p className="WeatherHub_Type_Humidity_data humidity">
                      {tempa[6] ? tempa[6] : ""}
                    </p>
                  </div>
                  <div className="WeatherHub_Humidity_Type">
                    <p className="WeatherHub_Type_title">Day 8</p>
                    <p className="WeatherHub_Type_Humidity_data humidity">
                      {tempa[7] ? tempa[7] : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        <div className="WeatherHub_left">
          <div className="WeatherHub_left_texts">
            <Link
              className="WeatherHub_left_text1"
              to={place ? `/weatherHub/${place}` : "/weatherHub"}
              style={activeTab === "tab1" ? styles.active : styles.inactive}
              onClick={() => setActiveTab("tab1")}
            >
              Today
            </Link>
            <Link
              className="WeatherHub_left_text2"
              to={
                place ? `/weatherHub/${place}/tomorrow` : "/weatherHub/tomorrow"
              }
              style={activeTab === "tab2" ? styles.active : styles.inactive}
              onClick={() => setActiveTab("tab2")}
            >
              Tomorrow
            </Link>
            <Link
              className="WeatherHub_left_text3"
              to={place ? `/weatherHub/${place}/7days` : "/weatherHub/7days"}
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
