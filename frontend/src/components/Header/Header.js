import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	
	return (
		<header className="flex_space_between">
			<Link to="/"><div className="header_logo"><span role="img" aria-label="rocket-emogi">🚀</span>Avenue</div></Link>
			<div>
				<ul>
					<li><Link to="/">HOME</Link></li>
					<li><Link to="/">ABOUT</Link></li>
					<li><Link to="/">OUR MISSION</Link></li>
					<li><Link to="/">BLOGS</Link></li>
					<li><Link to="/">TEAM</Link></li>
				</ul>
			</div>
			<div className="toggle_menu_container">
				<button onClick={() => {
					let element = document.getElementById("NavigationSideDrawer");
					element.classList.add("openNavbar");
					// Get the current page scroll position
                    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
                    
                    // if any scroll is attempted, set this to the previous value
                    window.onscroll = function() {
                        window.scrollTo(scrollLeft, scrollTop);
                    };
				}}><i className="fa fa-bars" aria-hidden="true"></i></button>
			</div>
		</header>
	);
};
export default Header;