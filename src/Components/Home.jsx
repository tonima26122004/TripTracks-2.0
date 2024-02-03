import React from "react";
import { useParams } from "react-router-dom";
import "../Style/Home.css";

function Home({
  Destinations,
  Recommended,
  Destination_week,
  Reason,
  Subscribe,
  Footer,
  User_output,
  Search,
  Navbar,
}) {
  const { tab } = useParams();
  if (tab === "discover") {
    return (
      <div>
        {Navbar}
        {User_output}
        {Search}
        {Destinations}
        {Recommended}
        {Destination_week}
        {Reason}
        {Subscribe}
        {Footer}
      </div>
    );
  } else if (tab === "planning") {
    return (
      <div>
        {Navbar}
        {User_output}
        {Footer}
      </div>
    );
  } else if (tab === "review") {
    return (
      <div>
        {Navbar}
        {User_output}
        {Footer}
      </div>
    );
  }
}
export default Home;
