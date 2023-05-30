import React from "react";
import '../Styles/sidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { IconButton } from "@mui/material";

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <div className="sb-header">
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>
                <IconButton>
                    <PersonAddIcon />
                </IconButton>
                <IconButton>
                    <GroupAddIcon />
                </IconButton>
                <IconButton>
                    <AddCircleIcon />
                </IconButton>
            </div>
            <div className="sb-search">search</div>
            <div className="sb-conversations">conversations</div>
        </div>
    )

}

export default Sidebar;
