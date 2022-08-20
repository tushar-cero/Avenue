import React from 'react'
import './About.css';
import Header from '../../components/Header/Header';
import NavigationSidedrawer from '../../components/NavigationSideDrawer/NavigationSideDrawer';
import Landing from "../../components/Landing/Landing";
import Footer from '../../components/Footer/Footer';

const About = () => {

    window.onscroll = () => {};

    return (
        <React.Fragment>
            <Header/>
            <NavigationSidedrawer/>
            <Landing heading='ABOUT US'/>
            <article className='About_Showcase'>
                <div className="container">
                    
                </div>
            </article>
            <article className='About_Team'>
                <div className="container">
                    <div className="flex_wrap" style={{gap:'24px'}}>
                        
                        <div className="team_member_template">
                            <div className='team_member_template_header'>
                                <div className='team_member_template_header_banner background_image'></div>
                                <div className='team_member_template_header_image background_image'></div>
                                <a href="https://www.google.com" className='team_member_template_header_social flex_regular'>
                                    <i className='fa-brands fa-linkedin-in' aria-hidden={true}></i>
                                </a>
                            </div>
                            <div className='team_member_template_info'>
                                <p className='team_member_template_info_name'>Name Surname</p>
                                <p className='team_member_template_info_postion'>Position</p>
                            </div>
                        </div>
                        <div className="team_member_template">
                            <div className='team_member_template_header'>
                                <div className='team_member_template_header_banner background_image'></div>
                                <div className='team_member_template_header_image background_image'></div>
                                <a href="https://www.google.com" className='team_member_template_header_social flex_regular'>
                                    <i className='fa-brands fa-linkedin-in' aria-hidden={true}></i>
                                </a>
                            </div>
                            <div className='team_member_template_info'>
                                <p className='team_member_template_info_name'>Name Surname</p>
                                <p className='team_member_template_info_postion'>Position</p>
                            </div>
                        </div>
                        <div className="team_member_template">
                            <div className='team_member_template_header'>
                                <div className='team_member_template_header_banner background_image'></div>
                                <div className='team_member_template_header_image background_image'></div>
                                <a href="https://www.google.com" className='team_member_template_header_social flex_regular'>
                                    <i className='fa-brands fa-linkedin-in' aria-hidden={true}></i>
                                </a>
                            </div>
                            <div className='team_member_template_info'>
                                <p className='team_member_template_info_name'>Name Surname</p>
                                <p className='team_member_template_info_postion'>Position</p>
                            </div>
                        </div>
                        <div className="team_member_template">
                            <div className='team_member_template_header'>
                                <div className='team_member_template_header_banner background_image'></div>
                                <div className='team_member_template_header_image background_image'></div>
                                <a href="https://www.google.com" className='team_member_template_header_social flex_regular'>
                                    <i className='fa-brands fa-linkedin-in' aria-hidden={true}></i>
                                </a>
                            </div>
                            <div className='team_member_template_info'>
                                <p className='team_member_template_info_name'>Name Surname</p>
                                <p className='team_member_template_info_postion'>Position</p>
                            </div>
                        </div>
                        <div className="team_member_template">
                            <div className='team_member_template_header'>
                                <div className='team_member_template_header_banner background_image'></div>
                                <div className='team_member_template_header_image background_image'></div>
                                <a href="https://www.google.com" className='team_member_template_header_social flex_regular'>
                                    <i className='fa-brands fa-linkedin-in' aria-hidden={true}></i>
                                </a>
                            </div>
                            <div className='team_member_template_info'>
                                <p className='team_member_template_info_name'>Name Surname</p>
                                <p className='team_member_template_info_postion'>Position</p>
                            </div>
                        </div>
                        <div className="team_member_template">
                            <div className='team_member_template_header'>
                                <div className='team_member_template_header_banner background_image'></div>
                                <div className='team_member_template_header_image background_image'></div>
                                <a href="https://www.google.com" className='team_member_template_header_social flex_regular'>
                                    <i className='fa-brands fa-linkedin-in' aria-hidden={true}></i>
                                </a>
                            </div>
                            <div className='team_member_template_info'>
                                <p className='team_member_template_info_name'>Name Surname</p>
                                <p className='team_member_template_info_postion'>Position</p>
                            </div>
                        </div>
                        <div className="team_member_template">
                            <div className='team_member_template_header'>
                                <div className='team_member_template_header_banner background_image'></div>
                                <div className='team_member_template_header_image background_image'></div>
                                <a href="https://www.google.com" className='team_member_template_header_social flex_regular'>
                                    <i className='fa-brands fa-linkedin-in' aria-hidden={true}></i>
                                </a>
                            </div>
                            <div className='team_member_template_info'>
                                <p className='team_member_template_info_name'>Name Surname</p>
                                <p className='team_member_template_info_postion'>Position</p>
                            </div>
                        </div>
                        <div className="team_member_template">
                            <div className='team_member_template_header'>
                                <div className='team_member_template_header_banner background_image'></div>
                                <div className='team_member_template_header_image background_image'></div>
                                <a href="https://www.google.com" className='team_member_template_header_social flex_regular'>
                                    <i className='fa-brands fa-linkedin-in' aria-hidden={true}></i>
                                </a>
                            </div>
                            <div className='team_member_template_info'>
                                <p className='team_member_template_info_name'>Name Surname</p>
                                <p className='team_member_template_info_postion'>Position</p>
                            </div>
                        </div>
                        <div className="team_member_template">
                            <div className='team_member_template_header'>
                                <div className='team_member_template_header_banner background_image'></div>
                                <div className='team_member_template_header_image background_image'></div>
                                <a href="https://www.google.com" className='team_member_template_header_social flex_regular'>
                                    <i className='fa-brands fa-linkedin-in' aria-hidden={true}></i>
                                </a>
                            </div>
                            <div className='team_member_template_info'>
                                <p className='team_member_template_info_name'>Name Surname</p>
                                <p className='team_member_template_info_postion'>Position</p>
                            </div>
                        </div>
                        <div className="team_member_template">
                            <div className='team_member_template_header'>
                                <div className='team_member_template_header_banner background_image'></div>
                                <div className='team_member_template_header_image background_image'></div>
                                <a href="https://www.google.com" className='team_member_template_header_social flex_regular'>
                                    <i className='fa-brands fa-linkedin-in' aria-hidden={true}></i>
                                </a>
                            </div>
                            <div className='team_member_template_info'>
                                <p className='team_member_template_info_name'>Name Surname</p>
                                <p className='team_member_template_info_postion'>Position</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </article>
            <Footer/>
        </React.Fragment>
    )
}

export default About;