import React from "react";
import './style.css'

export const Sidebar = (props) => {
    return (
        <sidebar className="sidebar border-right" style="display:none" id="mainSidebar">
            <button class="">Close &times;</button>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </sidebar>
    );
};