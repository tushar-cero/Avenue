import React from "react";
import "./Home.css";

import Header from "../../components/Header/Header.js";

const Home = () => {
	return (
		<React.Fragment>
			<article className="Home_Landing flex_regular">
				<Header />
				<div className="container">
					<div className="home_landing_grid_container flex_regular">
						<div>
							<h1>
								Welcome to Avenue
								<span role="img" aria-label="rocket-emogi">
									🚀
								</span>
							</h1>
							<p>
								Our mission is to scale your growth. Our culture
								focuses on holistic development, providing you
								with a competitive advantage through strategic
								skills and mindset. Drink from the firehose of
								innovation with us at DYPIU.
							</p>
							<div className="social_media_icons flex_space_around">
								<div>
									<a href="mailto:avenue@dypiu.ac.in">
										<i
											class="fa fa-envelope-o"
											aria-hidden="true"></i>
									</a>
								</div>
								<div>
									<a href="https://www.instagram.com/avenuedypiu/">
										<i
											class="fa fa-instagram"
											aria-hidden="true"></i>
									</a>
								</div>
								<div>
									<a href="https://twitter.com/avenuebase">
										<i
											class="fa fa-twitter"
											aria-hidden="true"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="flex_regular home_landing_grid_container_image">
							<div className="background_image_contain "></div>
						</div>
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
					<p className="home_article_paragraph">
						Access the opportunity to apply to premium internships
						at industry leading companies. Minimum stipend from 5K
						to 15K. Become part of the most exclusive club bringing
						you opportunities.
					</p>
					<div className="home_interns_showcase_marquee">
						<div className="home_interns_showcase_marquee_item"></div>
						<div className="home_interns_showcase_marquee_item"></div>
						<div className="home_interns_showcase_marquee_item"></div>
						<div className="home_interns_showcase_marquee_item"></div>
					</div>
				</div>
			</article>

			<article className="Home_Previous_Events">
				<div className="container">
					<h1 className="home_article_header">Our Previous Events</h1>
					<div className="home_previous_events_grid_container home_grid_container">
						<div className="home_previous_events_grid_container_item"></div>
						<div className="home_previous_events_grid_container_item"></div>
						<div className="home_previous_events_grid_container_item"></div>
						<div className="home_previous_events_grid_container_item"></div>
					</div>
				</div>
			</article>

			<article className="Home_Growth_Community_Showcase">
				<div className="container">
					<h1 className="home_article_header">
						Your Growth Community
					</h1>
					<p className="home_article_paragraph">
						Providing you with the right mindset to develop your
						professional career. Building the right values and
						confidence to help you tackle and succeed in all areas
						of your student life.
					</p>
					<div className="home_growth_community_showcase_grid_container home_grid_container">
						<div className="home_growth_community_showcase_grid_container_item flex_regular">
							<div>
								<h1>Speakers & Events</h1>
								<p>
									Brings you, industry experts, & thought
									leaders to impart wisdom and knowledge to
									the members of the club. Be an exclusive
									member of networking events, discussions
									series, guest professor interactions and
									find your next opportunity.
								</p>
							</div>
						</div>
						<div className="home_growth_community_showcase_grid_container_item flex_regular">
							<div>
								<h1>Speakers & Events</h1>
								<p>
									Brings you, industry experts, & thought
									leaders to impart wisdom and knowledge to
									the members of the club. Be an exclusive
									member of networking events, discussions
									series, guest professor interactions and
									find your next opportunity.
								</p>
							</div>
						</div>
						<div className="home_growth_community_showcase_grid_container_item flex_regular">
							<div>
								<h1>Speakers & Events</h1>
								<p>
									Brings you, industry experts, & thought
									leaders to impart wisdom and knowledge to
									the members of the club. Be an exclusive
									member of networking events, discussions
									series, guest professor interactions and
									find your next opportunity.
								</p>
							</div>
						</div>
						<div className="home_growth_community_showcase_grid_container_item flex_regular">
							<div>
								<h1>Speakers & Events</h1>
								<p>
									Brings you, industry experts, & thought
									leaders to impart wisdom and knowledge to
									the members of the club. Be an exclusive
									member of networking events, discussions
									series, guest professor interactions and
									find your next opportunity.
								</p>
							</div>
						</div>
					</div>
				</div>
			</article>

			<article className="Home_Footer">
				<div className="footer_card">
					<h1>
						Be Future Ready, Already.
						<span role="img" aria-label="star-emogi">
							🌟
						</span>
					</h1>
					<p>
						At Avenue, we look and expand beyond the conventional
						ways of career growth. Our vision is to create a
						collaborative community that thrives on collective
						wisdom and support.
					</p>
					<p>
						We are always on the lookout for amazing talent like
						yours. If you're driven, ambitious, and want to leave a
						dent in the universe? This is the perfect place for you.
					</p>
					<p>
						We are hiring across all divisions. Drop your university
						email below and we'll get back to you.
					</p>
				</div>
				<footer>
					<div className="container">
						<p>© Avenue DYPIU 2022 | All rights reserved. ®</p>
					</div>
				</footer>
			</article>
		</React.Fragment>
	);
};

export default Home;
