import React from "react";
import '../Style/Reason.css';
function Reason() {
    return(
            <div className="reason">
            <h1 className="reason-title"><a className="reason-title-link" href="#">“choose us” </a> for a reason</h1>
            <div className="Reason_contener">
                <div className="Reason_contener_left">
                    <img className="reason_image" src="/images/card_pick.png" alt="Image"/>
                </div>
                <div className="Reason_contener_right">
                    <div className="Reason_card">
                        <img className="Reason_card_img1" src="/images/1.png" alt="1"/>
                        <h1 className="Reason_card_title">Live weather updates</h1>
                        <p className="Reason_card_about_main">Stay informed with real-time weather updates for your destination, </p>
                        <p className="Reason_card_about">powered by AI for accurate insights and seamless travel preparation.</p>
                    </div>
                    <div className="Reason_card2">
                        <img className="Reason_card_img2" src="/images/2.png" alt="2"/>
                        <h1 className="Reason_card_title2">Altitude insights</h1>
                        <p className="Reason_card_about_main">Access precise altitude information for your destination with helpful </p>
                        <p className="Reason_card_about">acclimatization tips for a smoother and more enjoyable journey.</p>
                    </div>
                    <div className="Reason_card">
                        <img className="Reason_card_img3" src="/images/3.png" alt="3"/>
                        <h1 className="Reason_card_title">Gear Guidance</h1>
                        <p className="Reason_card_about_main">Discover essential gear recommendations tailored to your destination, </p>
                        <p className="Reason_card_about">ensuring you're well-prepared for any adventure.</p>
                    </div>
                    </div>
                </div>
            </div>
    );
}
export default Reason;