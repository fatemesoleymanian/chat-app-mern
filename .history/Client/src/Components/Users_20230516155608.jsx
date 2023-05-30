import React from "react";
import '../Styles/users-groups.css'
import '../Styles/App.css'
import '../Styles/sidebar.css'
import Logo from '../Images/live-chat.png'
import { IconButton } from "@mui/material";
import SerachIcon from '@mui/icons-material/Search'
import { useSelector } from "react-redux";


const Users = () => {
    const lightTheme = useSelector((state) => state.themeKey);

    return (
        <div className="list-container">
            <div className={"user-groups-header" + (lightTheme ? "" : " dark")}>
                <img src={Logo} alt="logo" style={{ height: "2rem", width: "2rem" }} />
                <p className={"user-groups-title" + (lightTheme ? "" : " dark")}>Online Users</p>
            </div>
            <div className={"sb-search" + (lightTheme ? "" : " dark")}>
                <IconButton>
                    <SerachIcon />
                </IconButton>
                <input placeholder="Search" className="search-box" />
            </div>
            <div className="user-group-list">
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
                <div className="list-item">
                    <p className="conv-icon">T</p>
                    <p className="conv-title">Test User</p>
                </div>

            </div>
        </div>
    )
}

export default Users;