import React from "react";
import '../Styles/welcome.css'
import '../Styles/App.css'
import Logo from '../Images/live-chat.png'
import { useSelector } from "react-redux";

const Welcome = ()=>{
    const lightTheme = useSelector((state) => state.themeKey);

    return(
        <div className={"welcome-container"+ (lightTheme ? "" : " dark")}>
            <img src={Logo} alt='welcome' className="welcome-logo"/>
            <p>View and text directly to people present in the chat rooms. </p>
        </div>
    )
}


export default Welcome;