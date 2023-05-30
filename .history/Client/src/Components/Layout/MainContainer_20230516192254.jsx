import React from "react";
import '../../Styles/container.css'
import '../../Styles/App.css'
import Sidebar from "./SideBar";
import ChatBar from "./ChatBar";
import Welcome from "./Welcome";
import CreateGroups from "../../Pages/CreateGroups";
import Users from "../../Pages/Users";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const MainContainer = () => {
    const lightTheme = useSelector((state) => state.themeKey);

    return (<div className={"wrapper"+ (lightTheme ? "" : " dark-container")}>

       <Sidebar />
       <Outlet />
    </div>)


}

export default MainContainer;