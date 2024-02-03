import React from "react";
import '../Style/Footer.css';
function Footer(){
    return(
        <div className="Footer">
            <div className="Footer_left">
                <img className="Footer_image" src="/images/TripTracks.png" alt="Footer_image"/>
                <div className="Footer_text">
                    <p className="Footer_sub">Stay ahead of the curve with </p>
                    <p className="Footer_sub">personalized weather warnings </p>
                    <p className="Footer_sub">and proactive health tips </p>
                    <p className="Footer_sub">delivered straight to you.</p>
                </div>
            </div>
            <div className="Footer_right">
                <div className="Footer_right_title">
                    <label className="Product">Product</label>
                    <a className="Footer_right_sub" href="TripTracks">TripTracks</a>
                </div>
                <div className="Footer_right_title">
                    <label className="About_Us">About Us</label>
                    <a className="Footer_right_sub" href="TripTracks">Our team</a>
                </div>
                <div className="Footer_right_title">
                    <label className="Contact">Contact</label>
                    <a className="Footer_right_sub" href="TripTracks">+91 6289 211 510</a>
                </div>
            </div>
        </div>
    );
}
export default Footer;