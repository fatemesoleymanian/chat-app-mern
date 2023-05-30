import React, { useEffect, useState } from "react";
import '../../Styles/sidebar.css';
import '../../Styles/App.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import NightLightIcon from '@mui/icons-material/Nightlight'
import LightModeIcon from '@mui/icons-material/LightMode'
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import ConversationItem from "../ConversationItems";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Feature/themeSlice";

const Sidebar = () => {


    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const lightTheme = useSelector((state) => state.themeKey);

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

    useEffect(() => {
       localStorage.setItem('theme',lightTheme)

    }, lightTheme);
    return (
        <div className="sidebar-wrapper">
            <div className={"sb-header" + (lightTheme ? "" : " dark")}>
                <div>
                    <IconButton>
                        <AccountCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
                    </IconButton>
                </div>
                <div>
                    <IconButton onClick={() => { navigate('users') }} title={'see and add user'}>
                        <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
                    </IconButton>
                    <IconButton onClick={() => { navigate('groups') }} title={'see available groups'}>
                        <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
                    </IconButton>
                    <IconButton onClick={() => { navigate('create-group') }} title={'create groups'}>
                        <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
                    </IconButton>

                    <IconButton title={'switch theme mode'} onClick={() => {
                        dispatch(toggleTheme())
                    }}>
                        {lightTheme && <NightLightIcon className={"icon" + (lightTheme ? "" : " dark")} />}
                        {!lightTheme && <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")} />}
                    </IconButton>
                </div>
            </div>

            <div className={"sb-search" + (lightTheme ? "" : " dark")}>
                <IconButton>
                    <SearchIcon className={"icon" + (lightTheme ? "" : " dark")} />
                </IconButton>
                <input placeholder="search" className={"search-box" + (lightTheme ? "" : " dark")}
                />
            </div>

            <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
                {
                    conversations.map((conv, index) => {
                        return (
                            <ConversationItem key={index} props={conv} />
                        )
                    })
                }


            </div>
        </div>
    )

}

export default Sidebar;
