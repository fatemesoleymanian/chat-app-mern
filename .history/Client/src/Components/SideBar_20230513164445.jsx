import React from "react";
import '../Styles/sidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { IconButton } from "@mui/material";

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <div className="sb-header">
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>
            </div>
            <div className="sb-search">search</div>
            <div className="sb-conversations">conversations</div>
        </div>
    )

}

export default Sidebar;
