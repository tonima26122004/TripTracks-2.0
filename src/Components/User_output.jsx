import React, { useState, useEffect } from "react";
import "../Style/User_output.css";
import { Link, useParams } from "react-router-dom";

function Useroutput() {
  const [activeTab, setActiveTab] = useState("tab1");
  const { tab } = useParams();

  const styles = {
    active: {
      color: "#402E32",
    },
    inactive: {
      opacity: "0.4",
    },
  };
  
  return (
    <div className="User_text">
      <Link
        to={`/choose/discover`}
        style={activeTab === "tab1" ? styles.active : styles.inactive}
        onClick={() => setActiveTab("tab1")}
      >
        Discover
      </Link>
      <Link
        to={`/choose/planning`}
        style={activeTab === "tab2" ? styles.active : styles.inactive}
        onClick={() => setActiveTab("tab2")}
      >
        Planning
      </Link>
      <Link
        to={`/choose/review`}
        style={activeTab === "tab3" ? styles.active : styles.inactive}
        onClick={() => setActiveTab("tab3")}
      >
        Review
      </Link>
    </div>
  );
}
export default Useroutput;
