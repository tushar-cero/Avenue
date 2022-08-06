import React from "react";
import { Link } from "react-router-dom";
import "./NavigationSideDrawer.css";

const NavigationSidedrawer = () => {

    return (
        <div id="NavigationSideDrawer" className="">
            <div className="NavigationSideDrawerClosing">
                <button onClick={()=> {
                    let element = document.getElementById("NavigationSideDrawer");
                    element.classList.remove("openNavbar");
                    window.onscroll = () => {};
                }}>
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                </button>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
					<li><Link to="/">ABOUT</Link></li>
					<li><Link to="/">OUR MISSION</Link></li>
					<li><Link to="/">BLOGS</Link></li>
					<li><Link to="/">TEAM</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavigationSidedrawer;
