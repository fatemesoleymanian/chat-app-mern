import React from "react";
import '../Styles/welcome.css'
import '../Styles/App.css'
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import Logo from '../Images/live-chat.png';

// type stateType = {
//     themeKey: string ,
// }

const Welcome = () => {
    const lightTheme = useSelector((state) => state.themeKey);

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 1, scale: 1 }}
                transition={{
                    ease: "anticipate",
                    duration: "0.4"
                }} className={"welcome-container" + (lightTheme ? "" : " dark")}>
                <img src={Logo} alt='welcome' className="welcome-logo" />
                <p>View and text directly to people present in the chat rooms. </p>
            </motion.div>
        </AnimatePresence>
    )
}


export default Welcome;