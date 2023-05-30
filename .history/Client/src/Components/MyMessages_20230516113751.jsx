import React from "react";
import '../Styles/chatbar.css'
import '../Styles/sidebar.css'
import '../Styles/App.css'


const MyMessages = ({ props }) => {

    return (
        <div className="self-message-container">
            <div className="message-box">
                <p >{props.message}</p>
                <p className="self-timestamp">12:01 am</p>
            </div>
        </div>
    )

}

export default MyMessages;