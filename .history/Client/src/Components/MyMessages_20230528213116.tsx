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
}
const MyMessages = (props:propsType) => {
    const lightTheme = useSelector((state:stateType) => state.themeKey);

    return (
        <div className="self-message-container">
            <div className={"message-box"+ (lightTheme ? "" : " message-box-dark")}>
                <p >{props.message}</p>
                <p className="self-timestamp">{props.timestamp}</p>
            </div>
        </div>
    )

}

export default MyMessages;