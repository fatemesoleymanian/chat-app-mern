import React from "react";
import '../../Styles/login.css';
import '../../Styles/sidebar.css';
import Logo from '../../Images/live-chat.png'
import { FilledInput, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <div className="login-wrapper">
            <div className="image-container">
                <img src={Logo} alt='welcome' className="welcome-logo" />
            </div>
            <div className="login-box">
                <p>Login to your account.</p>
                <TextField id="standard-basic" label="Enter your username :" variant="standard" />
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
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