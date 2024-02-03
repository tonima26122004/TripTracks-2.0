import React from "react";
import "../Style/Register1.css";

function Register1({ nextStep, handleChange, values }) {

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="Main1">
      <img className="Ellipse" src="/images/Ellipse_login.png" alt="bg" />
      <div className="Main_logo">
        <img src="/images/TripTracks.png" alt="Main_logo" />
      </div>
      <div className="Main1_Num">
        <div className="Main1_num1">
          <img
            className="Main1_num1_bg"
            src="/images/Num_bg_Reg.png"
            alt="Main_1"
          />
          <img className="Main1_num1" src="/images/1.png" alt="Main_1" />
        </div>
        <img className="Main1_num2" src="/images/2.png" alt="Main_2" />
        <img className="Main1_num3" src="/images/3.png" alt="Main_3" />
      </div>
      <div className="Main1_text">
        <p className="Main1_qu">What should we call you?</p>
        <input
          className="Main1_ans"
          type="text"
          id="Username"
          placeholder="Username"
          value={values.username}
          onChange={handleChange("username")}
          required
        />
        <button onClick={Continue} className="Main1_button">
          Continue
        </button>
      </div>
    </div>
  );
}
export default Register1;
