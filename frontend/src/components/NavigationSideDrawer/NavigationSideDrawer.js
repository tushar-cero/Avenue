import React from "react";
import { Link } from "react-router-dom";
import MenuToggle from "../MenuToggle/MenuToggle.js";
import "./SideDrawer.css";

const NavigationSidedrawer = () => {
    return (
        <div id="NavigationSideDrawer" className="">
            <div className="NavigationSideDrawerClosing">
                <MenuToggle openValue={true} />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <a
                            aria-hidden="true"
                            href="https://medium.com/@tusharsinghofficial"
                        >
                            BLOG
                        </a>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
                <div className="social-media">
                    <div className="social-media-icon social-media-icon-instagram flex_regular">
                        <a
                            aria-hidden="true"
                            href="https://instagram.com/official.tusharsingh?utm_medium=copy_link"
                        >
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                    <div className="social-media-icon social-media-icon-linkedin flex_regular">
                        <a
                            aria-hidden="true"
                            href="https://www.facebook.com/profile.php?id=100059297882202"
                        >
                            <i className="fa fa-facebook"></i>
                        </a>
                    </div>
                    <div className="social-media-icon social-media-icon-facebook flex_regular">
                        <a
                            aria-hidden="true"
                            href="https://www.linkedin.com/in/tusharsinghofficial/"
                        >
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="social-media-icon social-media-icon-twitter flex_regular">
                        <a
                            aria-hidden="true"
                            href="https://twitter.com/TusharSingh_1?s=09"
                        >
                            <i className="fa fa-twitter"></i>
                        </a>
                    </div>
                    <div className="social-media-icon social-media-icon-envelope-o flex_regular">
                        <a
                            aria-hidden="true"
                            href="mailto:tusharsingh.contact@gmail.com"
                        >
                            <i className="fa fa-envelope-o"></i>
                        </a>
                    </div>
                    <div className="social-media-icon social-media-icon-github flex_regular">
                        <a
                            aria-hidden="true"
                            href="https://github.com/tusharsinghofficial"
                        >
                            <i className="fa fa-github"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavigationSidedrawer;
