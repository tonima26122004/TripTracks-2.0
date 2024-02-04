import React,{useState} from "react";
import '../Style/Login.css';
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth} from "firebase/auth";


function Login(){
    
    const navigate=useNavigate("");
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const signin = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/Choose");
        } catch {
            alert("You entered a wrong username or password.");
        }
    }
    return(
        <div className="login">
            <div className="Choose_top">
                <img className="Choose_Ellipse_login" src="/images/Ellipse_login.png" alt="Ellipse_login"/>
                <img className="Choose_TripTracks" src="/images/TripTracks.png" alt="TripTracks"/>
            </div>
            <div className="login_main">
                <h1 className="login_main_title">Welcome back!!</h1>
                <p className="login_main_qu1">Email</p>
                <input className="login_main_ans1" type="email" id="password" placeholder="Username@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <p className="login_main_qu2">Password</p>
                <input className="login_main_ans2" type="text" id="password" placeholder="****************" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                <button onClick={(e)=>{signin(e)}} className="login_button">Continue</button>
                <p className="login_main_sub">Don't Have an account?<a href="/" className="login_main_sub_link">Sign Up→</a></p>
            </div>
            
        </div>
    );
}
export default Login;