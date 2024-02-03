import React from "react";
import "../Style/User_output.css";
import { Link } from "react-router-dom";

function Useroutput() {
  return (
    <ul className="User_text">
      <li className="">
        <Link
          to="/home"
          className="Discover"
        >
          Discover
        </Link>
      </li>
      <li className="">
        <Link
          to="/planning"
          className="planning"
        >
          Planning
        </Link>
      </li>
      <li className="">
        <Link
          to="/review"
          className="Review"
        >
          Review
        </Link>
      </li>
    </ul>
  );
}
export default Useroutput;
