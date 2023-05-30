import React from "react";
import '../../Styles/login.css';
import '../../Styles/sidebar.css';
import Logo from '../../Images/live-chat.png'
import { TextField } from "@mui/material";

const Login = () => {
    return (
        <div className="login-wrapper">
            <div className="image-container">
            <img src={Logo} alt='welcome' className="welcome-logo"/>
            </div>
            <div className="login-box">
                <p>Login to your account.</p>
                <TextField id="standard-basic" label="Enter your username :" variant="standard" />
            </div>
        </div>
    )
}

export default Login;