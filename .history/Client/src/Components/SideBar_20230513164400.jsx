import React from "react";
import '../Styles/sidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Sidebar = ()=>{
    return(
        <div className="sidebar-wrapper">
            <div className="sb-header">
                <AccountCircleIcon />
            </div>
            <div className="sb-search">search</div>
            <div className="sb-conversations">conversations</div>
        </div>
    )

}

export default Sidebar;
