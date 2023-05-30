import React from "react";
import '../../Styles/container.css'
import Sidebar from "./SideBar";
import ChatBar from "./ChatBar";
import Welcome from "./Welcome";
import CreateGroups from "../Actions/CreateGroups";
import Users from "../Users";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
    return (<div className="wrapper">

       <Sidebar />
       <Outlet />
    </div>)


}

export default MainContainer;