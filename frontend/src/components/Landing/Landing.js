import React from 'react'
import Header from "../Header/Header.js";
import NavigationSidedrawer from '../NavigationSideDrawer/NavigationSideDrawer.js';
import "./Landing.css";

const Landing = ({heading}) => {
    return (
        <article className='Page_Landing flex_regular'>
            <Header/>
            <NavigationSidedrawer/>

            <div className='landing_heading flex_regular'>
                <div className='page_landing_container_text'>{heading}</div>
            </div>
            <div className="landing_background background_image"></div>
        </article>
    )
}

export default Landing;