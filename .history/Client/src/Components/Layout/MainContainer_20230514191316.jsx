import React from "react";
import '../../Styles/container.css'
import Sidebar from "./SideBar";
import ChatBar from "./ChatBar";
import Welcome from "./Welcome";
import CreateGroups from "../Actions/CreateGroups";
import User_Groups from "../Groups";

const MainContainer = () => {
    return (<div className="wrapper">

       <Sidebar />
       {/* <Welcome /> */}
       {/* <CreateGroups /> */}
       {/* <ChatBar props={{
            name: 'Test#1',
            timestamp: "today"
        }}/> */}
        <User_Groups />
    </div>)


}

export default MainContainer;