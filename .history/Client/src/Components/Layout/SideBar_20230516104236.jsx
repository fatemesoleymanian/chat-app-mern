import React, { useState } from "react";
import '../../Styles/sidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import NightLightIcon from '@mui/icons-material/Nightlight'
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import ConversationItem from "../ConversationItems";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [conversations, setConversations] = useState([
        {
            name: 'Test#1',
            lastMessage: 'How are you?',
            timestamp: "today"
        },
        {
            name: 'Pest#2',
            lastMessage: 'are u home?',
            timestamp: "today"
        },
        {
            name: 'Lest#3',
            lastMessage: "i'm home",
            timestamp: "yesterday"
        },
    ]);
    const navigate = useNavigate();

    return (
        <div className="sidebar-wrapper">
            <div className="sb-header">
                <div>
                    <IconButton>
                        <AccountCircleIcon />
                    </IconButton>
                </div>
                <div>
                    <IconButton onClick={()=>{navigate('users')}}>
                        <PersonAddIcon/>
                    </IconButton>
                    <IconButton onClick={()=>{navigate('groups')}}>
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
                     />
            </div>

            <div className="sb-conversations">
                {
                    conversations.map((conv,index)=>{
                        return(
                            <ConversationItem key={index} props={conv} />
                        )
                    })
                }


            </div>
        </div>
    )

}

export default Sidebar;
