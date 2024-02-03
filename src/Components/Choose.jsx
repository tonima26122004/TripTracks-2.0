import React from "react";
import '../Style/Choose.css';
function Choose(){
    return(
        <div className="Choose">
            <div className="Choose_top">
                <img className="Choose_Ellipse_login" src="/images/Ellipse_login.png" alt="Ellipse_login"/>
                <img className="Choose_TripTracks" src="/images/TripTracks.png" alt="TripTracks"/>
            </div>
            <h1 className="Choose_title">How do you want to use TripTracks?</h1>
            <div className="Choose_allcards">
                <div className="Choose_Card">
                    <img className="Choose_Card_img" src="/images/card_pick.png" alt="Choose_Card_img"/>
                    <h1 className="Choose_Card_title">Discover</h1>
                    <p className="Choose_Card_sub">Explore off-the-beaten-path </p>
                    <p className="Choose_Card_sub">destinations, access interactive </p>
                    <p className="Choose_Card_sub">maps and enjoy exclusive deals</p>
                </div>
                <div className="Choose_Card">
                    <img className="Choose_Card_img" src="/images/card_pick.png" alt="Choose_Card_img"/>
                    <h1 className="Choose_Card_title">Planning</h1>
                    <p className="Choose_Card_sub">Create tailored plans based on </p>
                    <p className="Choose_Card_sub">your preferences with AI </p>
                    <p className="Choose_Card_sub">integrated budgeting assistance.</p>
                </div>
                <div className="Choose_Card">
                    <img className="Choose_Card_img" src="/images/card_pick.png" alt="Choose_Card_img"/>
                    <h1 className="Choose_Card_title">Review</h1>
                    <p className="Choose_Card_sub">Share your unique perspectives  </p>
                    <p className="Choose_Card_sub">and contribute to a dynamic</p>
                    <p className="Choose_Card_sub">and informative community.</p>
                </div>
            </div>
            <button className="Choose_button">Continue</button>
            <a className="Choose_skip" href="/Home">Skip→</a>
        </div>
    );
}
export default Choose;