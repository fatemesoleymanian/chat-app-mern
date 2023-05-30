import React from "react";
import '../Styles/users-groups.css'
import '../Styles/App.css'
import '../Styles/sidebar.css'
import Logo from '../Images/live-chat.png'
import { IconButton } from "@mui/material";
import SerachIcon from '@mui/icons-material/Search'
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";



const Users = () => {
    const lightTheme = useSelector((state) => state.themeKey);

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 1, scale: 1 }}
                transition={{
                    ease: "anticipate",
                    duration: "0.4"
                }} className="list-container">
                <div className={"user-groups-header" + (lightTheme ? "" : " dark")}>
                    <img src={Logo} alt="logo" style={{ height: "2rem", width: "2rem" }} />
                    <p className={"user-groups-title" + (lightTheme ? "" : " dark")}>Online Users</p>
                </div>
                <div className={"sb-search" + (lightTheme ? "" : " dark")}>
                    <IconButton>
                        <SerachIcon className={(lightTheme ? "" : " dark")} />
                    </IconButton>
                    <input placeholder="Search" className={"search-box" + (lightTheme ? "" : " dark")} />
                </div>
                <div className="user-group-list">
                    <div className={"list-item" + (lightTheme ? "" : " dark")}>
                        <p className="conv-icon">T</p>
                        <p className={"conv-title" + (lightTheme ? "" : " dark")}>Test User</p>
                    </div>
                    <div className="list-item">
                        <p className="conv-icon">T</p>
                        <p className="conv-title">Test User</p>
                    </div>
                    <div className="list-item">
                        <p className="conv-icon">T</p>
                        <p className="conv-title">Test User</p>
                    </div>
                    <div className="list-item">
                        <p className="conv-icon">T</p>
                        <p className="conv-title">Test User</p>
                    </div>
                    <div className="list-item">
                        <p className="conv-icon">T</p>
                        <p className="conv-title">Test User</p>
                    </div>
                    <div className="list-item">
                        <p className="conv-icon">T</p>
                        <p className="conv-title">Test User</p>
                    </div>
                    <div className="list-item">
                        <p className="conv-icon">T</p>
                        <p className="conv-title">Test User</p>
                    </div>
                    <div className="list-item">
                        <p className="conv-icon">T</p>
                        <p className="conv-title">Test User</p>
                    </div>

                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Users;