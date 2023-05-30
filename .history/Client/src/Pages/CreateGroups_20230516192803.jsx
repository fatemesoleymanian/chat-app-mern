import { IconButton } from "@mui/material";
import React from "react";
import '../Styles/create-groups.css'
import '../Styles/App.css'
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded'
import { useSelector } from "react-redux";

const CreateGroups = () => {
    const lightTheme = useSelector((state) => state.themeKey);

    return (
        <div className={"create-group-wrapper" + (lightTheme ? "" : " dark")}>
            <input type="text" placeholder="Enter group name ." className={"search-box" + (lightTheme ? "" : " dark")} />
            <IconButton>
                <DoneOutlineRoundedIcon className={(lightTheme ? "" : " dark")} />
            </IconButton>
        </div>
    )
}


export default CreateGroups;