import React from "react";
import '../Styles/sidebar.css'

const ConversationItem = ({props}) =>{
    const item = props
    return(
        <div className="conversation-containrt">
            <p className="conv-icon">{props.name[0]}</p>
            <p className="conv-title">{props.name}</p>
            <p className="conv-lastMessage">{props.lastMessage}</p>
            <p className="conv-timestamp">{props.timestamp}</p>

        </div>
    )

}

export default ConversationItem;