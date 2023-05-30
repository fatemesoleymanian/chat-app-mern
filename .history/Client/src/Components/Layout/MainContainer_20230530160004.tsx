import React from "react";
import '../../Styles/container.css'
import '../../Styles/App.css'
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = require( "./SideBar");

type stateType = {
    themeKey: boolean,
}

const MainContainer = () => {
    const lightTheme = useSelector((state: stateType) => state.themeKey);

    return (<div className={"wrapper" + (lightTheme ? "" : " dark-container")}>

        <Sidebar />
        <Outlet />
    </div>)


}

export default MainContainer;