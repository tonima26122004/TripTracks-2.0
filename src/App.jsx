import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Choose from "./Components/Choose";
import WeatherHub from "./Components/WeatherHub";
import Login from "./Components/Login";
import Destinations from "./Components/Destinations";
import Recommended from "./Components/Recommended";
import Destination_week from "./Components/Destination_week";
import Reason from "./Components/Reason";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";
import User_output from "./Components/User_output";
import Search from "./Components/Search";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/choose" element={<Choose />} />
        <Route
          path="/choose/:tab"
          element={
            <Home
              Destinations={<Destinations />}
              Recommended={<Recommended />}
              Destination_week={<Destination_week />}
              Reason={<Reason />}
              Subscribe={<Subscribe />}
              Footer={<Footer />}
              User_output={<User_output />}
              Search={<Search />}
              Navbar={<Navbar />}
            />
          }
        />
        <Route
          path="/choose/:tab"
          element={
            <Home
              Destinations={<Destinations />}
              Recommended={<Recommended />}
              Destination_week={<Destination_week />}
              Reason={<Reason />}
              Subscribe={<Subscribe />}
              Footer={<Footer />}
              User_output={<User_output />}
              Search={<Search />}
              Navbar={<Navbar />}
            />
          }
        />
        <Route
          path="/choose/:tab"
          element={
            <Home
              Destinations={<Destinations />}
              Recommended={<Recommended />}
              Destination_week={<Destination_week />}
              Reason={<Reason />}
              Subscribe={<Subscribe />}
              Footer={<Footer />}
              User_output={<User_output />}
              Search={<Search />}
              Navbar={<Navbar />}
            />
          }
        />
        <Route path="/weatherHub" element={<WeatherHub />} />
        <Route path="/weatherHub/tomorrow" element={<WeatherHub />} />
        <Route path="/weatherHub/7days" element={<WeatherHub />} />
        <Route path="/weatherHub/:place" element={<WeatherHub />} />
        <Route path="/weatherHub/:place/tomorrow" element={<WeatherHub />} />
        <Route path="/weatherHub/:place/7days" element={<WeatherHub />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
