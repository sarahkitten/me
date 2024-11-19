import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">I've worked on...</h2>
							</div>
						</div>

						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
									<div className="project" style={{backgroundImage: 'url(images/IntegrationsAndAgents.png)'}}>
										<div className="desc">
											<div className="con">
												<h3><a href="work.html">New Relic Integrations and Agents</a></h3>
												<span>New Relic's marketplace for finding and installing integrations and agents.
												Worked on an Agile team to fully overhaul the UI, resulting in faster load times
												and more clicks, and to implement a new "Installed" tab for navigating through 
												already-installed agents.
												</span>
											</div>
										</div>
									</div>
								</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/SYS2.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">New Relic Onboarding</a></h3>
											<span>Developed and maintained New Relic's onboarding flow using 
												React and Typesccript in a micro-frontend architecture.  
												Maintained an Elixir service upholding a 99.99% uptime SLA.</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/IF2.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">New Relic Install Framework</a></h3>
											<span>
											Collaboratively engineered a declarative UI framework to convert YAML configurations into 
											dynamic installation instructions, used in 200+ workflows with 32,000 monthly active users.
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
									<div className="project" style={{backgroundImage: 'url(images/btntask.png)'}}>
										<div className="desc">
											<div className="con">
												<h3><a href="work.html">Webcam Eye Tracker</a></h3>
												<span>Web-based eye tracking screen magnifier using JS/HTML/CSS.
												Designed and helped conduct two experiments for evaluating usability for people with low vision.
												See my video, which won the REU's "Best Project Visual" award.
												</span>
												<p className="icon">
													<span><a href="https://github.com/sarahkitten/webcam-gaze-magnifier"><i className="icon-github" /></a></span>
													<span><a href="https://youtu.be/6SClQqPEGh0">See Video</a></span>
													{/* <span><a href="https://cs.rit.edu/~snkreu/Homepage.html">See Website</a></span> */}
												</p>
											</div>
										</div>
									</div>
								</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/form.gif)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">BRING Recycling Donation App</a></h3>
											<span>Winner of 2020 Hack for a Cause hackathon.  React.js web application for a local nonprofit that allows them to receive photos of 
												prospective donations and quickly send custom or pre-written email/text responses to the donor.</span>
											<p className="icon">
												<span><a href="https://github.com/alecspringel/bring-client"><i className="icon-github" /></a></span>
												<span><a href="https://docs.google.com/presentation/d/1dEptBArFjM2LFUX3n7JDU3ShwGuBttNji57Sf6ZMfhU/edit?usp=sharing"> Pitch Deck</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/futurecrypt.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Future Crypt</a></h3>
											<span>3D fighting adventure game using Unity and C#.  Documented progress on 4 
												builds and implemented game systems for currency, upgrades, mana, speedrun timing, health, combat, and progression.
												Game was selected for SIMMER.IO Founder’s Club.
											</span>
											<p className="icon">
												<span><a href="https://futurecryptbeta.s3.us-west-2.amazonaws.com/FinalBuild/index.html">Play Online</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/*<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>*/}
					</div>
				</section>
      </div>
    )
  }
}
