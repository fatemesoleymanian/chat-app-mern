import React from "react";
import '../Styles/chatbar.css'
import '../Styles/sidebar.css'

const OthersMessages = () => {
    return (
        <div className="other-message-container">
            <div className="conversation-containrt">
                <p className="conv-icon">{props.name[0]}</p>
                <p className="conv-title">{props.name}</p>
                <p className="conv-lastMessage">{props.lastMessage}</p>
                <p className="conv-timestamp">{props.timestamp}</p>
            </div>
        </div>
    )

}

export default OthersMessages;