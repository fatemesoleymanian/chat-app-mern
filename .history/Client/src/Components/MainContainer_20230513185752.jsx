import React from "react";
import '../Styles/container.css'
import Sidebar from "./SideBar";
import ChatBar from "./ChatBar";


const MainContainer = () => {
    return (<div className="wrapper">

       <Sidebar />
       <WorkArea />
    </div>)


}

export default MainContainer;