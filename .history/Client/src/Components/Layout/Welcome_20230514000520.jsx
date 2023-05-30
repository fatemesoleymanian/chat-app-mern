import React from "react";
import '../../Styles/welcome.css'
import Logo from '../Images/live-chat.png'

const Welcome = ()=>{
    return(
        <div className="welcome-container">
            <img src={Logo} alt='welcome' className="welcome-logo"/>
            <p>View and text directly to people present in the chat rooms. </p>
        </div>
    )
}


export default Welcome;