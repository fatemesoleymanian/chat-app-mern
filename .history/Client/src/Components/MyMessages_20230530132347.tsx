import React from "react";
import '../Styles/chatbar.css'
import '../Styles/sidebar.css'
import '../Styles/App.css'
import { useSelector } from "react-redux";

type stateType = {
    themeKey: boolean,
}
type propsType = {
    name: string,
    message: string,
    timestamp: string,
}
const MyMessages = ({ name, message, timestamp }: propsType) => {
    const lightTheme = useSelector((state: stateType) => state.themeKey);

    return (
        <div className="self-message-container">
            <div className={"message-box" + (lightTheme ? "" : " message-box-dark")}>
                <p >{message}</p>
                <p className="self-timestamp">{timestamp}</p>
            </div>
        </div>
    )

}

export default MyMessages;