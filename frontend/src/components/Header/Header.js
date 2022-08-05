import React from "react";
import { Link } from "react-router-dom";

import MenuToggle from "../MenuToggle/MenuToggle.js";
import "./Header.css";

const Header = () => {
	return (
		<header className="flex_space_between">
			<Link to="/">
				<div className="header_logo">
					<span role="img" aria-label="rocket-emogi">
						🚀
					</span>
					Avenue
				</div>
			</Link>
			<div>
				<ul>
					<li>
						<Link to="/">HOME</Link>
					</li>
					<li>
						<Link to="/">ABOUT</Link>
					</li>
					<li>
						<Link to="/">PREVIOUS EVENTS</Link>
					</li>
					<li>
						<Link to="/">OUR MISSION</Link>
					</li>
					<li>
						<Link to="/">BLOGS</Link>
					</li>
					<li>
						<Link to="/">TEAM</Link>
					</li>
				</ul>
			</div>
			<div className="toggle_menu_container">
				<MenuToggle openValue={false} />
			</div>
		</header>
	);
};
export default Header;
