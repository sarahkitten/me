import React, { Component } from 'react'

export default class Timeline extends Component {
  handleResumeClick = (e) => {
    e.preventDefault();
    // Replace this URL with your actual resume PDF URL
    const resumePDFUrl = "https://docs.google.com/document/d/1gzqLIx1UBdQGeVXgIquVJL9VbYfEhzgd6AtO_fJ7PCg/preview";
    this.props.openPDFModal(resumePDFUrl, "Sarah Kitten - Resume");
  }

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
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-code" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer @ Visa Inc. <span>Feb 2025 – Present</span></h2>
                        <p>I'm currently working at Visa, where I'm developing the React/TypeScript frontend platform for Visa's Verifi One payment dispute solution. 
                          One of the things I'm most excited about is introducing a new AI-assisted frontend development workflow that's increased our delivery speed by 40%. 
                          I've been leading frontend context engineering across the organization by creating and refining AI memory banks for all frontend projects, 
                          and it's been amazing to see the adoption across 200+ engineers and stakeholders through my weekly demos. 
                          I've also been modernizing legacy codebases using AI-assisted workflows to convert JavaScript to TypeScript and boost unit test coverage from 20% to 80%.
                        </p>
                        <p className="icon">
                          <span><a href="#" onClick={this.handleResumeClick}>View Resume</a></span>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-code" />
                      </div>
                      <div className="timeline-label">
                      <h2>Software Engineer @ New Relic <span>2022-2025</span></h2>
                        <p>At New Relic, I worked with a high-performing Agile team of 11 engineers to plan, develop, and deliver new React/Typescript UI experiences.
                        I personally led the end-to-end planning and execution of multiple features - I authored and managed Jira tickets, facilitated scrum processes, 
                        and provided regular updates to stakeholders, and I produced comprehensive DACIs, CDDs, feature plans, diagrams, A/B tests, and documentation.
                        I was recognized by management for taking initiative and consistently delivering high-quality work.
                        </p>
                        <p className="icon">
												<span><a href="#" onClick={this.handleResumeClick}>View Resume</a></span>
											</p>
                      </div>
                    </div>
                  </article>
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
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
