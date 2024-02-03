import React, { useState } from "react";
import "../Style/Register2.css";
import { useNavigate } from "react-router-dom";

function Register2({ nextStep, prevStep, handleChange, values }) {
  const navigate = useNavigate();

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div className="Main1">
      <img className="Ellipse" src="/images/Ellipse_login.png" alt="bg" />
      <div className="Main_logo">
        <img src="/images/TripTracks.png" alt="Main_logo" />
      </div>
      <div className="Main1_Num">
        <img className="Main1_num1" src="/images/1.png" alt="Main_1" />
        <div className="Main2_num2">
          <img
            className="Main1_num1_bg"
            src="/images/Num_bg_Reg.png"
            alt="Main_2"
          />
          <img className="Main1_num1" src="/images/2.png" alt="Main_2" />
        </div>
        <img className="Main1_num3" src="/images/3.png" alt="Main_3" />
      </div>
      <div className="Main1_text">
        <p className="Main1_qu">We will reach out to you on</p>
        <input
          className="Main1_ans"
          type="email"
          id="email"
          placeholder="Username@gmail.com"
          value={values.email}
          onChange={handleChange('email')}
          required
        />
        <button onClick={Continue} className="Main1_button">
          Continue
        </button>
      </div>
    </div>
  );
}
export default Register2;
