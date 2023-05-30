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
const OthersMessages = (props: propsType) => {
    const lightTheme = useSelector((state: stateType) => state.themeKey);
    const icon = props.name.charAt(0);

    return (
        <div className={"other-message-container" + (lightTheme ? "" : " dark")}>
            <div className={"conversation-containrt" + (lightTheme ? "" : " dark")}>
                <p className={"conv-icon"}>{icon}</p>
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