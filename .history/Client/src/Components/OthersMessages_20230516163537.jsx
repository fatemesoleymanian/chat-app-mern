import React from "react";
import '../Styles/chatbar.css'
import '../Styles/sidebar.css'
import '../Styles/App.css'
import { useSelector } from "react-redux";

const OthersMessages = ({ props }) => {
    const lightTheme = useSelector((state) => state.themeKey);

    return (
        <div className={"other-message-container" + (lightTheme ? "" : " dark")}>
            <div className={"conversation-containrt" + (lightTheme ? "" : " dark")}>
                <p className={"conv-icon" + (lightTheme ? "" : " dark")}>{props.name[0]}</p>
                <div className={"other-text-content" + (lightTheme ? "" : " dark")}>
                    <p className={"conv-title" + (lightTheme ? "" : " other-text-content-dark")}>{props.name}</p>
                    <p className={"conv-lastMessage" + (lightTheme ? "" : " dark")}>{props.message}</p>
                    <p className={"self-timestamp" + (lightTheme ? "" : " dark")}>12:00 am</p>
                </div>
            </div>
        </div>
    )

}

export default OthersMessages;