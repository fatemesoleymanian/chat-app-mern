import React from "react";
import '../Styles/container.css'
import Sidebar from "./SideBar";
import ChatBar from "./ChatBar";


const MainContainer = () => {
    return (<div className="wrapper">

       <Sidebar />
       {/* <ChatBar props={{
            name: 'Test#1',
            timestamp: "today"
        }}/> */}
    </div>)


}

export default MainContainer;