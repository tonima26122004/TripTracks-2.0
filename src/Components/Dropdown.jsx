import React from "react";
import '../Style/DroupDownProfile.css';
function DroupDownProfile(){
    return(
        <div className="DroupDownProfile">
            <div className="DroupDownProfile_ul">
                <a className="DroupDownProfile_ul_menu" href="Wishlist">Wishlist</a>
                <a className="DroupDownProfile_ul_menu" href="History">History</a>
                <a className="DroupDownProfile_ul_menu" href="/Login">Logout</a>
            </div>
        </div>
    )
};
export default DroupDownProfile;