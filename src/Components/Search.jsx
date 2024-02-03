import React from "react";
import '../Style/Search.css';

function Search() {
    return(
        <div className="Search">
            <div className="Search_box">
            <div className="Search-text">
                <label>Where</label>
                <div className="Input">
                    <input className="Input" type="text" id="fname" name="fname" placeholder="Add destination"/>
                </div>
            </div>
            <div className="Search-text">
                <label>Arrival</label>
                <div className="Input">
                    <input className="Input" type="text" id="fname" name="fname" placeholder="Add date"/>
                </div>
            </div> 
            <div className="Search-text">
                <label>Departure</label>
                <div className="Input">
                    <input className="Input" type="text" id="fname" name="fname" placeholder="Add date"/>
                </div>
            </div>
            <div className="Search-text">
                <label>Who</label>
                <div className="Input">
                    <input className="Input" type="text" id="fname" name="fname" placeholder="Add guests"/>
                </div>
            </div>
            <img className="search-image" src="/images/Search Button.png" alt="Search"/>
            </div>
            
        </div>
    );
}
export default Search;