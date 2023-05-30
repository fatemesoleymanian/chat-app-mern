import React from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/sidebar.css'
import '../Styles/App.css'
import { useSelector } from "react-redux";

const ConversationItem = ({ props }) => {
    const item = props
    const navigate = useNavigate()
    const lightTheme = useSelector((state) => state.themeKey);

    return (
        <motion.div initial={{ scale: 0 }}
                    animate={{ scale: 1 }} exit={{ scale: 1 }}
                    transition={{
                        ease: "anticipate",
                        duration: "0.4"
                    }} className={"conversation-containrt"+ (lightTheme ? "" : " conversation-containrt-dark")} onClick={() => {
            navigate('chatroom')
        }}>
            <p className={"conv-icon"}>{props.name[0]}</p>
            <p className={"conv-title" + (lightTheme ? "" : " dark-txt")}>{props.name}</p>
            <p className={"conv-lastMessage" + (lightTheme ? "" : " dark-txt")}>{props.lastMessage}</p>
            <p className={"conv-timestamp" + (lightTheme ? "" : " dark-txt")}>{props.timestamp}</p>

        </motion.div>
    )

}

export default ConversationItem;