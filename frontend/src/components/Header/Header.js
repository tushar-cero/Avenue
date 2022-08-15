import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {

	const [headerBackground, setHeaderBackground] = useState(false);
    const handleHeaderBackground = () => {
        if(window.scrollY >= 100)
            setHeaderBackground(true); 
        else
            setHeaderBackground(false); 
    }
    window.addEventListener('scroll', handleHeaderBackground);
	
	return (
		<header className={headerBackground?'header_background flex_space_between':'flex_space_between'}>
			<Link to="/"><div className="header_logo background_image_contain"></div></Link>
			<div>
				<ul>
					<li><Link to="/">HOME</Link></li>
					<li><Link to="/about">ABOUT</Link></li>
					<li><Link to="/">BLOGS</Link></li>
					<li><Link to="/team">BECOME A MEMBER</Link></li>
					<li><Link to="/team">TEAM</Link></li>
				</ul>
			</div>
			<div className="toggle_menu_container">
				<button  aria-label="Left Align" onClick={() => {
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