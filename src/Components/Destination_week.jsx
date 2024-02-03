import React from "react";
import '../Style/Destination_week.css';
function DestinationWeek() {
    return(
        <div className="Week">
            <div className="Week_bg">
                <img className="Week_bg_img" src="/images/BG.png" alt="BG"/>
            </div>
            <div className="Week_card">
                <p className="Week_text">Destination of the week:</p>
                <h1 className="Week_title">Ladakh</h1>
                <p className="Week_about-1st">The<i> "Land of High Passes" </i>, a mesmerizing destination. </p>
                <p className="Week_about">Get ready to be captivated by the stark beauty of its</p>
                <p className="Week_about">barren yet enchanting terrain. </p>
                <button className="Week_explore">View tour package</button>
            </div>
        </div>
    );
}
export default DestinationWeek;