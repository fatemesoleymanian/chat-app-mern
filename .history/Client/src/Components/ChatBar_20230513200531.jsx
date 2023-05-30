import React from "react";
import '../Styles/chatbar.css'
import {IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const Chatbar = ({ props }) => {

    return (
        <div className="chatbar-wrapper">
            <div className="chatarea-header">
                <p className="conv-icon">{props.name[0]}</p>
                <div className="header-text">
                    <p className="conv-title">{props.name}</p>
                    <p className="conv-timestamp">{props.timestamp}</p>
                </div>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </div>
            <div className="messages-container">message container</div>
            <div className="text-input-area">text-input</div>

        </div>)
}

export default Chatbar;