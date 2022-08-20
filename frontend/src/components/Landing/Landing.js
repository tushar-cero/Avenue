import React, {useState} from 'react';
import'./Landing.css';

const Landing = ({heading}) => {

    const [landingBackground, setLandingBackground] = useState(false);
    const handleLandingBackground = () => {
        if(window.scrollY >= 100)
            setLandingBackground(true); 
        else
            setLandingBackground(false); 
    }
    window.addEventListener('scroll', handleLandingBackground);

    return (
        <article className={landingBackground?'Landing_Page landing_padding':'Landing_Page'}>
            <div className={landingBackground?'landing_page_container background_image border_radius':'landing_page_container background_image'}> 
                <div className={landingBackground?'landing_page_container_body flex_regular border_radius':'landing_page_container_body flex_regular'}>
                    <div className='landing_page_container_body_heading'>{heading}</div>
                </div>
            </div>
        </article>
    );
};


export default Landing;
