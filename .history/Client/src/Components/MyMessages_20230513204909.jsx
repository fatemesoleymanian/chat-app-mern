import React from "react";
import '../Styles/chatbar.css'
import '../Styles/sidebar.css'

const MyMessages = () => {

    return (
        <div className="self-message-container">
            <div className="message-box">
                <p className="self-timestamp">props2.message</p>
                <p className="self-timestamp">12 : 00 am</p>
            </div>
        </div>
    )

}

export default MyMessages;