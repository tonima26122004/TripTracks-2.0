import React from "react";
import { useNavigate } from "react-router-dom";
import '../Style/Login.css';
function Login(){
    const navigate = useNavigate();
    return(
        <div className="login">
            <div className="Choose_top">
                <img className="Choose_Ellipse_login" src="/images/Ellipse_login.png" alt="Ellipse_login"/>
                <img className="Choose_TripTracks" src="/images/TripTracks.png" alt="TripTracks"/>
            </div>
            <div className="login_main">
                <h1 className="login_main_title">Welcome back!!</h1>
                <p className="login_main_qu1">Email</p>
                <input className="login_main_ans1" type="email" id="password" placeholder="Username@gmail.com" required />
                <p className="login_main_qu2">Password</p>
                <input className="login_main_ans2" type="text" id="password" placeholder="****************" required />
                <button onClick={()=>navigate("/Choose")} className="login_button">Continue</button>
                <p className="login_main_sub">Don't Have an account?<a href="/" className="login_main_sub_link">Sign Up→</a></p>
            </div>
            
        </div>
    );
}
export default Login;