import React from "react";
import '../Styles/users-groups.css'
import '../Styles/sidebar.css'
import '../Styles/App.css'
import Logo from '../Images/live-chat.png'
import { IconButton } from "@mui/material";
import SerachIcon from '@mui/icons-material/Search'
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from 'framer-motion'


type stateType = {
    themeKey: string ,
}

const Groups = () => {
    const lightTheme = useSelector((state:stateType) => state.themeKey);

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 1, scale: 1 }}
                transition={{
                    ease: "anticipate",
                    duration: "0.5"
                }}
                className="list-container">
                <div className={"user-groups-header" + (lightTheme ? "" : " dark")}>
                    <img src={Logo} alt="logo" style={{ height: "2rem", width: "2rem" }} />
                    <p className={"user-groups-title" + (lightTheme ? "" : " dark")}>Available Groups</p>
                </div>
                <div className={"sb-search" + (lightTheme ? "" : " dark")}>
                    <IconButton>
                        <SerachIcon className={"" + (lightTheme ? "" : " dark")} />
                    </IconButton>
                    <input placeholder="Search" className={"search-box" + (lightTheme ? "" : " dark")} />
                </div>
                <div className="user-group-list">
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.97 }}
                        className={"list-item" + (lightTheme ? "" : " dark")}>
                        <p className="conv-icon">T</p>
                        <p className={"conv-title" + (lightTheme ? "" : " dark")}>Test Group</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.97 }}
                        className={"list-item" + (lightTheme ? "" : " dark")}>
                        <p className="conv-icon">T</p>
                        <p className={"conv-title" + (lightTheme ? "" : " dark")}>Test Group</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.97 }}
                        className={"list-item" + (lightTheme ? "" : " dark")}>
                        <p className="conv-icon">T</p>
                        <p className={"conv-title" + (lightTheme ? "" : " dark")}>Test Group</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.97 }}
                        className={"list-item" + (lightTheme ? "" : " dark")}>
                        <p className="conv-icon">T</p>
                        <p className={"conv-title" + (lightTheme ? "" : " dark")}>Test Group</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.97 }}
                        className={"list-item" + (lightTheme ? "" : " dark")}>
                        <p className="conv-icon">T</p>
                        <p className={"conv-title" + (lightTheme ? "" : " dark")}>Test Group</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.97 }}
                        className={"list-item" + (lightTheme ? "" : " dark")}>
                        <p className="conv-icon">T</p>
                        <p className={"conv-title" + (lightTheme ? "" : " dark")}>Test Group</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.97 }}
                        className={"list-item" + (lightTheme ? "" : " dark")}>
                        <p className="conv-icon">T</p>
                        <p className={"conv-title" + (lightTheme ? "" : " dark")}>Test Group</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.97 }}
                        className={"list-item" + (lightTheme ? "" : " dark")}>
                        <p className="conv-icon">T</p>
                        <p className={"conv-title" + (lightTheme ? "" : " dark")}>Test Group</p>
                    </motion.div>

                </div>
            </motion.div>

        </AnimatePresence>
    )
}

export default Groups;