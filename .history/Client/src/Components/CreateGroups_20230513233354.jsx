import { IconButton } from "@mui/material";
import React from "react";
import '../Styles/create-groups.css'
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded'

const CreateGroups = ()=>{
    return(
        <div className="create-group-wrapper">
            <input type="text" placeholder="Enter group name ." className="search-box" />
            <IconButton>
                <DoneOutlineRoundedIcon />
            </IconButton>
        </div>
    )
}


export default CreateGroups;