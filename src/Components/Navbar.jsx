import React, { useState } from "react";
import "../Style/Navbar.css";
import DroupDownProfile from "./Dropdown";
import { Link } from "react-router-dom";

function Navbar() {
  const [openPofile, setOpenPofile] = useState(false);
  return (
    <div>
      <nav>
        <div className="flex ml-10 mr-10">
          <div className="Logo">
            <a href="/Home">
              <img src="/images/TripTracks.png" alt="Logo" />
            </a>
          </div>
          <div className="flex justify-center text-centers items-center ml-[240px] p-[15px]">
            <ul className="flex items-center list-none gap-[80px] text-2xl ">
              <li className="flex flex-col items-center justify-center gap-[3px] cursor-pointer">
                <Link style={{ textDecoration: "none" }} to="/">
                  Discover
                </Link>
              </li>
              <li className="flex flex-col items-center justify-center gap-[3px] cursor-pointer">
                <Link to="/planning">Planning</Link>
              </li>
              <li className="flex flex-col items-center justify-center gap-[3px] cursor-pointer">
                <Link to="/review">Review</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="rightside">
          <img className="Live" src="/images/Live.svg" alt="Live" />
          <a href="/WeatherHub">WeatherHub</a>
          <img
            className="notification"
            src="/images/Notification.svg"
            alt="notification"
          />
          <img
            className="User"
            onClick={() => setOpenPofile((perv) => !perv)}
            src="/images/User_pof.svg"
            alt="Usre_profile"
          />
        </div>
        {openPofile && <DroupDownProfile />}
      </nav>
    </div>
  );
}

export default Navbar;
