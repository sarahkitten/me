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
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-study" />
                      </div>
                      <div className="timeline-label">
                        <h2>University of Oregon <span>Expected Fall 2022</span></h2>
                        <p>I am pursuing my undergraduate studies at the University of Oregon with majors in Computer and Information Science and Music.  As a Clark Honors College student, 
                          I also take small, writing-intense liberal arts and science classes, participating in group projects and class discussions as we learn a subject of the 
                          professor's choice.  I'm currently working on programming a game with an adaptive soundtrack for my undergraduate thesis.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
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
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-eye-outline" />
                      </div>
                      <div className="timeline-label">
                      <h2>Research @ Rochester Institute of Technology <span>2021</span></h2>
                        <p>During the summer of 2021, I participated in the Computational Sensing for Human-centered AI REU at RIT. 
                          I developed a fully web-based eye tracking screen magnifier and designed two experiments 
                          for evaluating its usability for people with low vision.  My partner and I found participants and conducted the studies 
                          over zoom, then reported on our results through a technical report, live talk, and recorded 
                          symposium presentation.  I'm currently working on preparing the report for submission to the 
                          2022 ACM Symposium on Eye Tracking Research & Applications (ETRA).
                        </p>
                        <p className="icon">
												<span><a href="https://youtu.be/6SClQqPEGh0">See Video</a></span>
                        <br></br>
                        <span><a href="https://cs.rit.edu/~snkreu/Homepage.html">See Website</a></span>
											</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
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
