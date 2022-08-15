import React from "react";
import { Link } from "react-router-dom";
import "./NavigationSideDrawer.css";

const NavigationSidedrawer = () => {

    return (
        <div id="NavigationSideDrawer" className="">
            <div className="NavigationSideDrawerClosing">
                <button aria-label="Left Align" onClick={()=> {
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
					<li><Link to="/about">ABOUT US</Link></li>
					<li><Link to="/">BLOGS</Link></li>
					<li><Link to="/become-a-member">BECOME A MEMBER</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavigationSidedrawer;
