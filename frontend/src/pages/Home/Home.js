import React from "react";
import "./Home.css";

import Header from "../../components/Header/Header.js";
import NavigationSideDrawer from '../../components/NavigationSideDrawer/NavigationSideDrawer';

const Home = () => {

    window.onscroll = () => {};

    return (
        <React.Fragment>
            <article className="Home_Landing flex_regular">
                <Header />
                <NavigationSideDrawer/>
                <div className="container">
                    <div className="home_landing_grid_container flex_regular">
                        <div>
                            <h1><span className="highlight_header">Welcome to Avenue</span><span role="img" aria-label="rocket-emogi">🚀</span></h1>
                            <p>Our mission is to scale your growth. Our culture focuses on holistic development, providing you with a competitive advantage through strategic skills and mindset. Drink from the firehose of innovation with us at DYPIU.</p>
                            <div className="social_media_icons flex_space_around">
                                <div>
                                    <a aria-hidden="true" aria-label="icon" href="mailto:avenue@dypiu.ac.in">
										<i class="fa fa-envelope-o" aria-hidden="true"></i>
									</a>
                                </div>
                                <div>
                                    <a aria-hidden="true" aria-label="icon" href="https://www.instagram.com/avenuedypiu/">
										<i class="fa fa-instagram" aria-hidden="true"></i>
									</a>
                                </div>
                                <div>
                                    <a aria-hidden="true" aria-label="icon" href="https://twitter.com/avenuebase">
										<i class="fa fa-twitter" aria-hidden="true"></i>
									</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex_regular home_landing_grid_container_image background_image_contain"></div>
                    </div>
                    <div className="home_landing_form">
                        <form></form>
                    </div>
                </div>
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
                <div className="circle circle4"></div>
            </article>

			<article className="Home_Interns_Showcase">
                <div className="container">
                    <h1 className="home_article_header">Avenue Interns</h1>
                    <p className="home_article_paragraph">Access the opportunity to apply to premium internships at industry leading companies. Minimum stipend from 5K to 15K. Become part of the most exclusive club bringing you opportunities.</p>
                    <div className="home_interns_showcase_marquee">
                        <div className="home_interns_showcase_marquee_scroll">
							<div className="home_interns_showcase_marquee_item home_interns_showcase_marquee_item_kpmg background_image"></div>
							<div className="home_interns_showcase_marquee_item home_interns_showcase_marquee_item_goldman_sachs background_image"></div>
							<div className="home_interns_showcase_marquee_item home_interns_showcase_marquee_item_unilever background_image"></div>
							<div className="home_interns_showcase_marquee_item home_interns_showcase_marquee_item_wipro background_image"></div>
							<div className="home_interns_showcase_marquee_item home_interns_showcase_marquee_item_amazon background_image"></div>
							<div className="home_interns_showcase_marquee_item home_interns_showcase_marquee_item_back_of_america background_image"></div>
							<div className="home_interns_showcase_marquee_item home_interns_showcase_marquee_item_bicon background_image"></div>
							<div className="home_interns_showcase_marquee_item home_interns_showcase_marquee_item_times_internet background_image_contain background_image"></div>
						</div>
                    </div>
                </div>
            </article>
            
			<article className="Home_Previous_Events">
                <div className="container">
                    <h1 className="home_article_header">Our Previous Events</h1>
                    <div className="home_previous_events_grid_container">
                        <div><a href="https://www.youtube.com/watch?v=8fgPNSyFSwo"><div className="home_previous_events_grid_container_item home_previous_events_grid_container_item_1 background_image_contain"></div></a></div>
                        <div><a href="https://www.youtube.com/watch?v=z0A_XRAXj8w"><div className="home_previous_events_grid_container_item home_previous_events_grid_container_item_2 background_image_contain"></div></a></div>
                        <div><div className="home_previous_events_grid_container_item home_previous_events_grid_container_item_3 background_image_contain"></div></div>
                        <div><div className="home_previous_events_grid_container_item home_previous_events_grid_container_item_4 background_image_contain"></div></div>
                    </div>
                </div>
            </article>

            <article className="Home_Growth_Community_Showcase">
                <div className="container">
                    <h1 className="home_article_header">Your Growth Community</h1>
                    <p className="home_article_paragraph">Providing you with the right mindset to develop your professional career. Building the right values and confidence to help you tackle and succeed in all areas of your student life.</p>
                    <div className="home_growth_community_showcase_grid_container">
                        <div className="home_growth_community_showcase_grid_container_item home_growth_community_showcase_grid_container_item_speakers_and_events background_image flex_regular">
                            <div className="flex_regular home_growth_community_showcase_grid_container_item_background_tint">
                                <div>
                                    <h1>Speakers & Events</h1>
                                    <p>Brings you, industry experts, & thought leaders to impart wisdom and knowledge to the members of the club. Be an exclusive member of networking events, discussions series, guest professor interactions and find your next opportunity.</p>
                                </div>
                            </div>
                        </div>
                        <div className="home_growth_community_showcase_grid_container_item home_growth_community_showcase_grid_container_item_industry_connect background_image flex_regular">
                            <div className="flex_regular home_growth_community_showcase_grid_container_item_background_tint">
                                <div>
                                    <h1>Industry Connect</h1>
                                    <p>Designed for outreach and establishing recruitment opportunities with the companies in the industry for club members. Acquires sponsorships, internships, placements, and industry visits.</p>
                                </div>
                            </div>
                        </div>
                        <div className="home_growth_community_showcase_grid_container_item home_growth_community_showcase_grid_container_item_applied_management background_image flex_regular">
                            <div className="flex_regular home_growth_community_showcase_grid_container_item_background_tint">
                                <div>
                                    <h1>Applied Management</h1>
                                    <p>Access real-world experience of management with practical application of SCM theories. Analyze business case studies, debates & discussions, develop revenue models and learn about scaling startups from step one to step done.</p>
                                </div>
                            </div>
                        </div>
                        <div className="home_growth_community_showcase_grid_container_item home_growth_community_showcase_grid_container_item_innov8 background_image flex_regular">
                            <div className="flex_regular home_growth_community_showcase_grid_container_item_background_tint">
                                <div>
                                    <h1>Innov8</h1>
                                    <p>Learn to sell. Learn to build. If you can do both, you will be unstoppable. Innov8 combines media, software, and business. Developing cutting-edge digital products, encouraging the student startup ecosystem. It also looks to develop students personal brands by leveraging new ways of personal marketing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

			<article className="Home_Footer">
				<div className="footer_card">
					<h1>Be Future Ready, Already. <span role="img" aria-label="star-emogi">🌟</span></h1>
					<p>At Avenue, we look and expand beyond the conventional ways of career growth. Our vision is to create a collaborative community that thrives on collective wisdom and support.</p>
					<p>We are always on the lookout for amazing talent like yours. If you're driven, ambitious, and want to leave a dent in the universe? This is the perfect place for you. </p>
					<p>We are hiring across all divisions. Drop your university email below and we'll get back to you.</p>
				</div>
				<footer>
					<div className="container"><p>© Avenue DYPIU 2022 | All rights reserved. ®</p></div>
				</footer>
			</article> 
        </React.Fragment>
    );
};

export default Home;
