import React from "react";
import '../../Styles/login.css';
import '../../Styles/App.css'
import '../../Styles/sidebar.css';
import Logo from '../../Images/live-chat.png'
import FormControl from '@mui/material/FormControl';
import { Button, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useSelector } from "react-redux";

const Login = () => {
    const lightTheme = useSelector((state) => state.themeKey);

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <div className={"login-wrapper"+ (lightTheme ? "" : " dark-container")}>
            <div className="image-container">
                <img src={Logo} alt='welcome' className="welcome-logo" />
            </div>
            <div className={"login-box"+ (lightTheme ? "" : " dark")}>
                <h2 className={"login-text"+ (lightTheme ? "" : " dark")}>Login to your account.</h2>
                <TextField id="standard-basic" label="Enter your username :" variant="outlined" 
                 inputProps={{ style: { color:(lightTheme ? "orange" : " grey") } }}/>
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