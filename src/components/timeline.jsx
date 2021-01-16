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
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-lightbulb" />
                      </div>
                      <div className="timeline-label">
                      <h2>Primary and Higher Education <span>2006-2018</span></h2>
                        <p>I graduated from Southridge High School with an IB Diploma.  Marching band was my greatest joy; I was a drum major and 
                          student leader for our competitive band for three years.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-study" />
                      </div>
                      <div className="timeline-label">
                        <h2>University of Oregon <span>2018-present</span></h2>
                        <p>I am pursuing my undergraduate studies at the University of Oregon with majors in Computer and Information Science and Music.  As a Clark Honors College student, 
                          I also take small, writing-intense liberal arts and science classes, participating in group projects and class discussions as we learn a subject of the 
                          professor's choice.  I'm currently working on programming a game for my undergraduate thesis.
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
                      <h2>Internship at the Social Security Administration <span>2018-2019</span></h2>
                        <p>I spent the summers of 2018 and 2019 working at the Social Security Administration field office in Beaverton, Oregon.
                        I assisted with generating and mailing forms, operating office machines, filing and sorting documents, organizing the office, and placing and answering phone calls.  By
                        communicating with my coworkers to find out what they needed, I was able to create a lot of my own work: labeling and inventorying the walls of pamphlets,
                        helping coworkers with technical difficulties, and calling clients ahead to schedule phone appointments.
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
