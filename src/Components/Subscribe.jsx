import React from "react";
import '../Style/Subscribe.css';
function Subscribe(){
    return(
        <div className="Subscribe">
            <p className="Subscribe_Title">Never be caught <i className="Subscribe_Title_i">off guard </i>again</p>
            <p className="Subscribe_sub">Stay ahead of the curve with personalized weather warnings and proactive health tips</p>
            <p className="Subscribe_sub"> delivered straight to you. Optimize your plans, stay safe, and thrive in any condition.</p>
            <div className="Subscribe_input">
                <input className="Subscribe_mail" type="email" placeholder="Enter email address" required/>
                <button className="Subscribe_button">Subscribe</button>
            </div>
        </div>
    );
}
export default Subscribe;