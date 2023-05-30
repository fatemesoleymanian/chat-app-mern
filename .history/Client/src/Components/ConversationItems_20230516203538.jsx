import React from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/sidebar.css'
import '../Styles/App.css'
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const ConversationItem = ({ props }) => {
    const item = props
    const navigate = useNavigate()
    const lightTheme = useSelector((state) => state.themeKey);

    return (
        <>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }} className={"conversation-containrt" + (lightTheme ? "" : " conversation-containrt-dark")} onClick={() => {
                navigate('chatroom')
            }}>
                <p className={"conv-icon"}>{props.name[0]}</p>
                <p className={"conv-title" + (lightTheme ? "" : " dark-txt")}>{props.name}</p>
                <p className={"conv-lastMessage" + (lightTheme ? "" : " dark-txt")}>{props.lastMessage}</p>
                <p className={"conv-timestamp" + (lightTheme ? "" : " dark-txt")}>{props.timestamp}</p>

            </motion.div>
        </>
    )

}

export default ConversationItem;