import React from "react";
import '../Styles/users-groups.css'
import '../Styles/sidebar.css'
import '../Styles/App.css'
import Logo from '../Images/live-chat.png'
import { IconButton } from "@mui/material";
import SerachIcon from '@mui/icons-material/Search'
import { useSelector } from "react-redux";
import { motion } from 'framer-motion'

const Groups = () => {
    const lightTheme = useSelector((state) => state.themeKey);

    return (
        <div className="list-container">
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
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                    className={"list-item" + (lightTheme ? "" : " dark")}>
                    <p className="conv-icon">T</p>
                    <p className={"conv-title" + (lightTheme ? "" : " dark")}>Test Group</p>
                </motion.div>

            </div>
        </div>
    )
}

export default Groups;