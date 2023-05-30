import React from "react";
import '../Styles/chatbar.css'
import '../Styles/sidebar.css'

const MyMessages = ({props}) => {

    return (
        <div className="self-message-container">
            <div className="message-box">
                <p className="conv-lastMessage">{props.message}</p>
                <p className="self-timestamp">{props.timestamp}</p>
            </div>
        </div>
    )

}

export default MyMessages;