import React from "react";
import '../Style/DroupDownProfile.css';
function DroupDownProfile(){
    return(
        <div className='flex flex-col dropDownProfile' >
            <div className='flex flex-col gap-4'>
                <a className="DroupDownProfile_ul_menu" href="Wishlist">Wishlist</a>
                <a className="DroupDownProfile_ul_menu" href="History">History</a>
                <a className="DroupDownProfile_ul_menu" href="/login">Logout</a>
            </div>
        </div>
    )
};
export default DroupDownProfile;