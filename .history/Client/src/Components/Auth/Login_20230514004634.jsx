import React from "react";
import '../../Styles/login.css';
import '../../Styles/sidebar.css';
import Logo from '../../Images/live-chat.png'
import FormControl from '@mui/material/FormControl';
import { Button, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
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
                <TextField id="standard-basic" label="Enter your username :" variant="outlined" />
                <br /><br />
                <FormControl sx={{ m: 1, width: '26ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
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
                        label="Password"
                    />
                </FormControl>
                <Button variant="outlined">Login</Button>
            </div>
        </div>
    )
}

export default Login;