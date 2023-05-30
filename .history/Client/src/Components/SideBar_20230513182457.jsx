import React, { useState } from "react";
import '../Styles/sidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import NightLightIcon from '@mui/icons-material/Nightlight'
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import ConversaItem from './ConversationItems'
import ConversationItem from "./ConversationItems";

const Sidebar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [conversations, setConversations] = useState([
        {
            name: 'Test#1',
            lastMessage: 'How are you?',
            timestamp: "today"
        },
        {
            name: 'Test#2',
            lastMessage: 'are u home?',
            timestamp: "today"
        },
        {
            name: 'Test#3',
            lastMessage: "i'm home",
            timestamp: "yesterday"
        },
    ]);

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
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input placeholder="search" className="search-box"
                    value={searchValue} />
            </div>

            <div className="sb-conversations">
                {
                    conversations.map((conv,index)=>{
                        return(
                            <ConversaItem key={index} props={conv} />
                        )
                    })
                }


            </div>
        </div>
    )

}

export default Sidebar;
