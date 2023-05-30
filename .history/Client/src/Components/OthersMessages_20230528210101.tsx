import React from "react";
import '../Styles/chatbar.css'
import '../Styles/sidebar.css'
import '../Styles/App.css'
import { useSelector } from "react-redux";

type stateType = {
    themeKey: string,
}
type propsType = {
    name: string,
    message: string
}
const OthersMessages = ({ name , message }:propsType) => {
    const lightTheme = useSelector((state: stateType) => state.themeKey);

    return (
        <div className={"other-message-container" + (lightTheme ? "" : " dark")}>
            <div className={"conversation-containrt" + (lightTheme ? "" : " dark")}>
                <p className={"conv-icon"}>{name[0]}</p>
                <div className={"other-text-content" + (lightTheme ? "" : " other-text-content-dark")}>
                    <p className={"conv-title"}>{name}</p>
                    <p className={"conv-lastMessage"}>{message}</p>
                    <p className={"self-timestamp"}>12:00 am</p>
                </div>
            </div>
        </div>
    )

}

export default OthersMessages;