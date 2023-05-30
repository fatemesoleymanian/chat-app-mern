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
                <p className={"conv-icon"}>{props.name[0]}</p>
                <div className={"other-text-content" + (lightTheme ? "" : " other-text-content-dark")}>
                    <p className={"conv-title"}>{props.name}</p>
                    <p className={"conv-lastMessage"}>{props.message}</p>
                    <p className={"self-timestamp"}>12:00 am</p>
                </div>
            </div>
        </div>
    )

}

export default OthersMessages;