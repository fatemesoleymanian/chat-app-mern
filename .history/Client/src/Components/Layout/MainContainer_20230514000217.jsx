import React from "react";
import '../Styles/container.css'
import Sidebar from "./SideBar";
import ChatBar from "./ChatBar";
import Welcome from "./Welcome";
import CreateGroups from "../CreateGroups";

const MainContainer = () => {
    return (<div className="wrapper">

       <Sidebar />
       <Welcome />
       {/* <CreateGroups /> */}
       {/* <ChatBar props={{
            name: 'Test#1',
            timestamp: "today"
        }}/> */}
    </div>)


}

export default MainContainer;