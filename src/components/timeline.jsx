import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  {/* <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                  <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-briefcase3" />
                      </div>
                      <div className="timeline-label">
                      <h2>Internship @ Social Security Administration <span>2018-2019</span></h2>
                        <p>I spent the summers of 2018 and 2019 working at the Social Security Administration field office in Beaverton, Oregon.
                        I assisted with generating and mailing forms, operating office machines, filing and sorting documents, organizing the office, 
                        and placing and answering phone calls.
                        </p>
                      </div>
                    </div>
                  </article> */}
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                  <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-study" />
                      </div>
                      <div className="timeline-label">
                        <h2>University of Oregon <span>2018-2022</span></h2>
                        <p>I graduated from the University of Oregon with majors in Computer and Information Science and Music.  As a Clark Honors College student, 
                          I also took small, writing-intense liberal arts and science classes, participating in group projects and class discussions as we learned a subject of the 
                          professor's choice.  For my undergraduate thesis, I created a piece of indeterminate digital music which adapts in real time to user inputs.
                        </p>
                        <p className="icon">
												<span><a href="https://docs.google.com/document/d/1XNyN7HFz6c_89-1E_r5E6-zO3h2RKIaYFOa1hjAp_fc/edit?usp=sharing">See Thesis</a></span>
											</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-eye-outline" />
                      </div>
                      <div className="timeline-label">
                      <h2>Research @ Rochester Institute of Technology <span>2021</span></h2>
                        <p>During the summer of 2021, I participated in the Computational Sensing for Human-centered AI REU at RIT. 
                          I independently developed a fully web-based eye tracking screen magnifier and designed two experiments 
                          for evaluating its usability for people with low vision.  I collaborated with a partner to find participants and conduct the studies 
                          over zoom, then we reported on our results through a technical report, live talk, and recorded 
                          symposium presentation.
                        </p>
                        <p className="icon">
												<span><a href="https://youtu.be/6SClQqPEGh0">See Video</a></span>
											</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                  <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-code" />
                      </div>
                      <div className="timeline-label">
                      <h2>Software Engineer @ New Relic <span>2022-2024</span></h2>
                        <p>At New Relic, I worked with a high-performing Agile team of 11 engineers to plan, develop, and deliver new React/Typescript UI experiences.
                        I personally led the end-to-end planning and execution of multiple features - I authored and managed Jira tickets, facilitated scrum processes, 
                        and provided regular updates to stakeholders, and I produced comprehensive DACIs, CDDs, feature plans, diagrams, A/B tests, and documentation.
                        I was recognized by management for taking initiative and consistently delivering high-quality work.
                        </p>
                        <p className="icon">
												<span><a href="https://docs.google.com/document/d/1lyIFWhrpZbg1onKTt4pz1PDeLQihTiSXocspnYsWP0k/edit?usp=sharing">View Resume</a></span>
											</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
