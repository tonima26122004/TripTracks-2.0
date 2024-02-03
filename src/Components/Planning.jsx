import React from "react";
import Navbar from "./Navbar";
import User_output from "./User_output";

const Planning = () => {
  return (
    <div>
      <Navbar />
      <User_output/>
      <div className="flex items-center m-10">
        <h1 className="text-5xl">Planning</h1>
      </div>
    </div>
  );
};

export default Planning;
