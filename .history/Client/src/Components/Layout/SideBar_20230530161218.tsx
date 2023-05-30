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
import { AnimatePresence, motion } from "framer-motion";


type stateType = {
    themeKey: boolean,
}

const Sidebar = () => {


    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const lightTheme = useSelector((state: stateType) => state.themeKey);
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
        //  localStorage.setItem('theme', lightTheme);
        console.log(lightTheme)
    }, [lightTheme]);
    return (

        <AnimatePresence>
            <motion.div className="sidebar-wrapper">
                <motion.div initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }} exit={{ scaleY: 1 }}
                    transition={{
                        ease: "anticipate",
                        duration: "0.4"
                    }} className={"sb-header" + (lightTheme ? "" : " dark")}>
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
                </motion.div>

                <motion.div initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }} exit={{ scaleY: 1 }}
                    transition={{
                        ease: "anticipate",
                        duration: "0.4"
                    }} className={"sb-search" + (lightTheme ? "" : " dark")}>
                    <IconButton>
                        <SearchIcon className={"icon" + (lightTheme ? "" : " dark")} />
                    </IconButton>
                    <input placeholder="search" className={"search-box" + (lightTheme ? "" : " dark")}
                    />
                </motion.div>

                <motion.div initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }} exit={{ scaleX: 1 }}
                    transition={{
                        ease: "anticipate",
                        duration: "0.4"
                    }} className={"sb-conversations" + (lightTheme ? "" : " dark")}>
                    {
                        conversations.map((conv, index) => {
                            return (
                                <ConversationItem key={index} name={conv.name} lastMessage={conv.lastMessage}
                                    timestamp={conv.timestamp} />
                            )
                        })
                    }


                </motion.div>
            </motion.div>
        </AnimatePresence>
    )

}

export default Sidebar;
