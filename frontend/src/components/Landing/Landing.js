import React from 'react'
import Header from "../Header/Header.js";
import NavigationSidedrawer from '../NavigationSideDrawer/NavigationSideDrawer.js';
import "./Landing.css";

import bgi_1 from "../../assets/background_images/landing_background.png";
import bgi_2 from "../../assets/background_images/landing_background_2.jpeg";
import bgi_3 from "../../assets/background_images/landing_background_3.jpeg";
import bgi_4 from "../../assets/background_images/landing_background_4.jpeg";
const BGI_Array = [bgi_1, bgi_2, bgi_3, bgi_4];
const index = Math.ceil(Math.random() * 4);
const bgi = BGI_Array[index-1];

const Landing = ({heading}) => {
    return (
        <article className='Page_Landing'>
            <div className='container'>
                <Header/>
                <NavigationSidedrawer/>
                <div className='page_landing_container'>
                    <div className='page_landing_container_background background_image' style={{backgroundImage: `url(${bgi})`}}></div>
                    <div className='page_landing_container_text'>{heading}</div>
                </div>
            </div>
        </article>
    )
}

export default Landing;