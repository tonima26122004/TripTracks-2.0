import React from "react";
import '../Style/Recommended.css';
function Recommended() {
    return(
        <div className="Recommended">
            <div className="Recommended-text ">
                <h1 className="Recommended-title">Recommended for you</h1>
                <p className="Recommended-subtitle">as per your <a className="Recommended-subtitle-link" href="#">preferences</a></p>
            </div>
            <div className="All-Cards">
                <div className="card">
                    <img className="card_img" src="/images/card_pick.png" alt="Card_picture"/>
                    <h1 className="Card_name">Place 1</h1>
                    <p className="Card_about">Description</p>
                    <p className="Card_charge">₹22,375</p>
                    <p className="Card_review">★4.40</p>
                    <button className="Explore">Explore</button>
                </div>
                <div className="card">
                    <img className="card_img" src="/images/card_pick.png" alt="Card_picture"/>
                    <h1 className="Card_name">Place 1</h1>
                    <p className="Card_about">Description</p>
                    <p className="Card_charge">₹22,375</p>
                    <p className="Card_review">★4.40</p>
                    <button className="Explore">Explore</button>
                </div>
                <div className="card">
                    <img className="card_img" src="/images/card_pick.png" alt="Card_picture"/>
                    <h1 className="Card_name">Place 1</h1>
                    <p className="Card_about">Description</p>
                    <p className="Card_charge">₹22,375</p>
                    <p className="Card_review">★4.40</p>
                    <button className="Explore">Explore</button>
                </div>
                <div className="card">
                    <img className="card_img" src="/images/card_pick.png" alt="Card_picture"/>
                    <h1 className="Card_name">Place 1</h1>
                    <p className="Card_about">Description</p>
                    <p className="Card_charge">₹22,375</p>
                    <p className="Card_review">★4.40</p>
                    <button className="Explore">Explore</button>
                </div>
            </div>
        </div>
    );
}
export default Recommended;