import React from "react";
import '../../Styles/login.css';
import Logo from '../../Images/live-chat.png'

const Login = () => {
    return (
        <div className="login-wrapper">
            <div className="image-container">
            <img src={Logo} alt='welcome' className="welcome-logo"/>
            </div>
            <div className="login-box">
                login
            </div>
        </div>
    )
}

export default Login;