import React from "react";
import '../Styles/chatbar.css'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send'
import MyMessages from './MyMessages'
import OthersMessages from './OthersMessages'

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
            <div className="messages-container">

                <OthersMessages props={
                    {
                        name: 'Test#1',
                        message: "i'm fine",
                        timestamp: "today"
                    }} />
                <MyMessages props={{
                    name: 'Me',
                    message: 'How are you?',
                    timestamp: "today"
                }} />

            </div>
            <div className="text-input-area">
                <input type="text" placeholder="Type a message"
                    className="search-box" />
                <IconButton>
                    <SendIcon />
                </IconButton>
            </div>

        </div>)
}

export default Chatbar;