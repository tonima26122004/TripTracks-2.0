import React from "react";
import "../style/User_output.css";


function Useroutput() {
  return (
    <ul className="User_text">
      <li className="">
        <a
          href="/Home"
          className="Discover"
        >
          Discover
        </a>
      </li>
      <li className="">
        <a
          href="/planning"
          className="planning"
        >
          Planning
        </a>
      </li>
      <li className="">
        <a
          href="/review"
          className="Review"
        >
          Review
        </a>
      </li>
    </ul>
  );
}
export default Useroutput;
