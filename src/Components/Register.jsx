import React from "react";
import "../style/Register.css";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <img className="Ellipse" src="/images/Ellipse_login.png" alt="bg"/>
      <div className="Main_logo"><img src="/images/TripTracks.png" alt="Main_logo"/></div>
      <div className="Main_text">
        <p className="Main_p1">Fit for Fun Wherever</p>
        <p className="Main_p2">Your Wings <a className="Main_box">{" "}take You{" "}</a> </p>
        <p className="Main_sub">Prepare for any climate in just one tap.</p>
      </div>
      <button onClick={()=>navigate("/Register1")} className="Main_button">Let’s get Started</button>
    </div>
  );
};

export default Register;
