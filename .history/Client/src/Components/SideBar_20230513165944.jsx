import React from "react";
import '../Styles/sidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import NightLightIcon from '@mui/icons-material/Nightlight'
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <div className="sb-header">
                <div>
                    <IconButton>
                        <AccountCircleIcon />
                    </IconButton>
                </div>
                <div>
                    <IconButton>
                        <PersonAddIcon />
                    </IconButton>
                    <IconButton>
                        <GroupAddIcon />
                    </IconButton>
                    <IconButton>
                        <AddCircleIcon />
                    </IconButton>
                    <IconButton>
                        <NightLightIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sb-search">
                <SearchIcon />
                <input />
            </div>
            <div className="sb-conversations">conversations</div>
        </div>
    )

}

export default Sidebar;
