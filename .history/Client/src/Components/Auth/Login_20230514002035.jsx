import React from "react";
import '../../Styles/login.css';
import '../../Styles/sidebar.css';
import Logo from '../../Images/live-chat.png'

const Login = () => {
    return (
        <div className="login-wrapper">
            <div className="image-container">
            <img src={Logo} alt='welcome' className="welcome-logo"/>
            </div>
            <div className="login-box">
                <p>Login to your account.</p>
            </div>
        </div>
    )
}

export default Login;