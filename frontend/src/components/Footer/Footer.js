import React from 'react';
import "./Footer.css";

import waveBG from "../../assets/background_images/wave.svg";

const Footer = () => {
    return (
        <footer className="background_image" style={{backgroundImage: `url(${waveBG})`}}>
            <div className="container">
                <div className="footer_logo background_image_contain"></div>
                <p>© Avenue DYPIU 2022 | All rights reserved. ®</p>
            </div>
        </footer>
    );
};

export default Footer;
