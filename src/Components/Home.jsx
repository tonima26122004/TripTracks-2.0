import React from "react";
import Navbar from "./Navbar";
import Destinations from "./Destinations";
import '../Style/Home.css';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="Home_Discover">
        <h1 className="Home_Discover">Discover</h1>
      </div>
      <Destinations/>
      
    </div>
  );
}
export default Home;

