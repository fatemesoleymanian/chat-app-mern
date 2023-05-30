import React from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/sidebar.css'
import '../Styles/App.css'
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

interface propsType {
    name: string,
    lastMessage: string,
    timestamp: string

}
type stateType = {
    themeKey: boolean,
}
const ConversationItem = ({ name, lastMessage, timestamp }: propsType) => {

    const navigate = useNavigate()
    const lightTheme = useSelector((state: stateType) => state.themeKey);

    return (
        <>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }} className={"conversation-containrt" + (lightTheme ? "" : " conversation-containrt-dark")} onClick={() => {
                navigate('chatroom')
            }}>
                <p className={"conv-icon"}>{name[0]}</p>
                <p className={"conv-title" + (lightTheme ? "" : " dark-txt")}>{name}</p>
                <p className={"conv-lastMessage" + (lightTheme ? "" : " dark-txt")}>{lastMessage}</p>
                <p className={"conv-timestamp" + (lightTheme ? "" : " dark-txt")}>{timestamp}</p>

            </motion.div>
        </>
    )

}

export default ConversationItem;