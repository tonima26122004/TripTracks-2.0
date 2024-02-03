import React from "react";
/*import Navbar from "./Navbar";*/
import Destinations from "./Destinations";
import '../Style/Home.css';
import Recommended from "./Recommended";
import Destination_week from "./Destination_week";
import Reason from "./Reason";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import User_output from "./User_output";
import Search from "./Search";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar/>
      <User_output/>
      <Search/>
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

