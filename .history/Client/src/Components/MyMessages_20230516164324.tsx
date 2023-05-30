import React from "react";
import '../Styles/chatbar.css'
import '../Styles/sidebar.css'
import '../Styles/App.css'
import { useSelector } from "react-redux";


const MyMessages = ({ props }) => {
    const lightTheme = useSelector((state) => state.themeKey);

    return (
        <div className="self-message-container">
            <div className={"message-box"+ (lightTheme ? "" : " message-box-dark")}>
                <p >{props.message}</p>
                <p className="self-timestamp">12:01 am</p>
            </div>
        </div>
    )

}

export default MyMessages;