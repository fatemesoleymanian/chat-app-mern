import React from "react";
import '../Styles/chatbar.css'
import '../Styles/sidebar.css'
import '../Styles/App.css'
import { useSelector } from "react-redux";

type stateType = {
    themeKey: Object,
}
type propsType = {
    name: string,
    message: string,
    timestamp:string,
    icon:string
}
const OthersMessages = (props:propsType) => {
    const lightTheme = useSelector((state:stateType) => state.themeKey);
    console.log(props)

    return (
        <div className={"other-message-container" + (lightTheme ? "" : " dark")}>
            <div className={"conversation-containrt" + (lightTheme ? "" : " dark")}>
                <p className={"conv-icon"}>{props.icon}</p>
                <div className={"other-text-content" + (lightTheme ? "" : " other-text-content-dark")}>
                    <p className={"conv-title"}>{props.name}</p>
                    <p className={"conv-lastMessage"}>{props.message}</p>
                    <p className={"self-timestamp"}>{props.timestamp}</p>
                </div>
            </div>
        </div>
    )

}

export default OthersMessages;