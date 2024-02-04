import React from "react";
import "../Style/Register.css";
import { Link } from 'react-router-dom';

const Register = ({ nextStep }) => {

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <div className="main">
      <img className="Ellipse" src="/images/Ellipse_login.png" alt="bg" />
      <div className="Main_logo">
        <img src="/images/TripTracks.png" alt="Main_logo" />
      </div>
      <div className="Main_text">
        <p className="Main_p1">Fit for Fun Wherever</p>
        <p className="Main_p2">
          Your Wings <a className="Main_box"> take You </a>{" "}
        </p>
        <p className="Main_sub">Prepare for any climate in just one tap.</p>
      </div>
      <button onClick={Continue} className="Main_button">
        Let’s get Started
      </button>
      <Link className="Login" to={"/login"} >Already Have an account?</Link>
    </div>
  );
};

export default Register;
