import React from "react";
import '../Styles/users-groups.css'
import '../Styles/sidebar.css'
import Logo from '../Images/live-chat.png'
import { IconButton } from "@mui/material";
import SerachIcon from '@mui/icons-material/Search'

const User_Groups = () => {
    return (
        <div className="list-container">
            <div className="user-groups-header">
                <img src={Logo} alt="logo" style={{ height: "2rem", width: "2rem" }} />
                <p className="user-groups-title">Online Users</p>
            </div>
            <div className="sb-search">
                <IconButton>
                    <SerachIcon />
                </IconButton>
                <input placeholder="Search" className="" />
            </div>
            <div className="user-group-list">
                <div className="list-tem">
                    <p className="conv-icon">T</p>
                    <p className="conv-title">Test User</p>
                </div>
                <div className="list-tem">
                    <p className="conv-icon">T</p>
                    <p className="conv-title">Test User</p>
                </div>
                <div className="list-tem">
                    <p className="conv-icon">T</p>
                    <p className="conv-title">Test User</p>
                </div>
                <div className="list-tem">
                    <p className="conv-icon">T</p>
                    <p className="conv-title">Test User</p>
                </div>
                <div className="list-tem">
                    <p className="conv-icon">T</p>
                    <p className="conv-title">Test User</p>
                </div>
                <div className="list-tem">
                    <p className="conv-icon">T</p>
                    <p className="conv-title">Test User</p>
                </div>

            </div>
        </div>
    )
}

export default User_Groups;