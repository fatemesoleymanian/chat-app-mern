import React from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/sidebar.css'
import '../Styles/App.css'
import { useSelector } from "react-redux";

const ConversationItem = ({ props }) => {
    const item = props
    const navigate = useNavigate()
    const lightTheme = useSelector((state) => state.themeKey);

    return (
        <div className="conversation-containrt" onClick={() => {
            navigate('chatroom')
        }}>
            <p className={"conv-icon"}>{props.name[0]}</p>
            <p className={"conv-title" + (lightTheme ? "" : " dark")}>{props.name}</p>
            <p className={"conv-lastMessage" + (lightTheme ? "" : " dark")}>{props.lastMessage}</p>
            <p className={"conv-timestamp" + (lightTheme ? "" : " dark")}>{props.timestamp}</p>

        </div>
    )

}

export default ConversationItem;