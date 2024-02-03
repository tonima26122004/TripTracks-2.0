import React from "react";
import Navbar from "./Navbar";
import Destinations from "./Destinations";
import '../Style/Home.css';
import Recommended from "./Recommended";
import Destination_week from "./Destination_week";
import Reason from "./Reason";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="Home_Discover">
        <h1 className="Home_Discover">Discover</h1>
      </div>
      <Destinations/>
      <Recommended/>
      <Destination_week/>
      <Reason/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}
export default Home;

