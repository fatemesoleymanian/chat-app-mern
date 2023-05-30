import { IconButton } from "@mui/material";
import React from "react";
import '../Styles/create-groups.css'
import '../Styles/App.css'
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded'
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const CreateGroups = () => {
    const lightTheme = useSelector((state) => state.themeKey);

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 1, scale: 1 }}
                transition={{
                    ease: "anticipate",
                    duration: "0.4"
                }} className={"create-group-wrapper" + (lightTheme ? "" : " dark")}>
                <input type="text" placeholder="Enter group name ." className={"search-box" + (lightTheme ? "" : " dark")} />
                <IconButton>
                    <DoneOutlineRoundedIcon className={(lightTheme ? "" : " dark")} />
                </IconButton>
            </motion.div>
        </AnimatePresence>
    )
}


export default CreateGroups;