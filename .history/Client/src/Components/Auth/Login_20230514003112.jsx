import React from "react";
import '../../Styles/login.css';
import '../../Styles/sidebar.css';
import Logo from '../../Images/live-chat.png'
import { FilledInput, IconButton, InputAdornment, TextField } from "@mui/material";

const Login = () => {
    return (
        <div className="login-wrapper">
            <div className="image-container">
                <img src={Logo} alt='welcome' className="welcome-logo" />
            </div>
            <div className="login-box">
                <p>Login to your account.</p>
                <TextField id="standard-basic" label="Enter your username :" variant="standard" />
                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                <FilledInput
                    id="filled-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </div>
        </div>
    )
}

export default Login;