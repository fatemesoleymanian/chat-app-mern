import React, { useState } from "react";
import '../../Styles/login.css';
import '../../Styles/App.css'
import '../../Styles/sidebar.css';
import FormControl from '@mui/material/FormControl';
import { Button, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const Logo = require('../../Images/live-chat.png');


type stateType = {
    themeKey: boolean,
}

const LoginAndRegister = () => {
    const [log_Or_reg, setLog_Or_reg] = useState(false);

    const lightTheme = useSelector((state: stateType) => state.themeKey);
    console.log(lightTheme)

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.FormEvent) => {
        event.preventDefault();
    };


    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 1, scale: 1 }}
                transition={{
                    ease: "anticipate",
                    duration: "0.4"
                }} className={"login-wrapper" + (lightTheme ? "" : " dark-container")}>
                <div className="image-container">
                    <img src={Logo} alt='welcome' className="welcome-logo" />
                </div>
                {log_Or_reg && <div className={"login-box" + (lightTheme ? "" : " dark")}>
                    <h2 className={"login-text" + (lightTheme ? "" : " dark")}>Login to your account.</h2>
                    <TextField id="standard-basic" label="Enter your username :" variant="outlined"
                        inputProps={{ style: { color: (lightTheme ? "black" : " grey") } }} />
                    <FormControl sx={{ m: 1, width: '26ch', color: 'grey' }} variant="outlined">
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
                }
            </motion.div>
        </AnimatePresence>
    )
}

export default LoginAndRegister;