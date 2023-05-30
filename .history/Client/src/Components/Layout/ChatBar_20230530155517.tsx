import React from "react";
import '../../Styles/chatbar.css'
import '../../Styles/App.css'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send'
import MyMessages from '../MyMessages'
import OthersMessages from '../OthersMessages'
import { useSelector } from "react-redux";
type propsType = {
    name: string,
    timestamp: string
}
type stateType = {
    themeKey: boolean,
}
const Chatbar = ({ name, timestamp }: propsType) => {
    const lightTheme = useSelector((state: stateType) => state.themeKey);

    return (
        <div className="chatbar-wrapper">
            <div className={"chatarea-header" + (lightTheme ? "" : " dark")}>
                <p className={"conv-icon" + (lightTheme ? "" : " dark")}>{props.name[0]}</p>
                <div className={"header-text" + (lightTheme ? "" : " dark")}>
                    <p className={"conv-title" + (lightTheme ? "" : " dark")}>{props.name}</p>
                    <p className={"conv-timestamp" + (lightTheme ? "" : " dark")}>{props.timestamp}</p>
                </div>
                <IconButton>
                    <DeleteIcon className={(lightTheme ? "" : " dark")} />
                </IconButton>
            </div>
            <div className={"messages-container" + (lightTheme ? "" : " dark")}>

                <OthersMessages
                    name={'Test#1'}
                    message={'How are you?'}
                    timestamp={"today"}
                />
                <MyMessages
                    name={'Me'}
                    message={"i'm fine , how about you"}
                    timestamp={"today"}
                />
                <OthersMessages name={'Test#1'}
                    message={'How are you?'}
                    timestamp={"today"} />
                <MyMessages name={'Me'}
                    message={"i'm fine , how about you"}
                    timestamp={"today"} />
                <OthersMessages name={'Test#1'}
                    message={'How are you?'}
                    timestamp={"today"} />
                <MyMessages name={'Me'}
                    message={"i'm fine , how about you"}
                    timestamp={"today"} />

            </div>
            <div className={"text-input-area" + (lightTheme ? "" : " dark")}>
                <input type="text" placeholder="Type a message"
                    className={"search-box" + (lightTheme ? "" : " dark")} />
                <IconButton>
                    <SendIcon className={(lightTheme ? "" : " dark")} />
                </IconButton>
            </div>

        </div>)
}

export default Chatbar;