import React, { Component } from 'react'

export default class Introduction extends Component {
  handleResumeClick = (e) => {
    e.preventDefault();
    // Replace this URL with your actual resume PDF URL
    const resumePDFUrl = "https://docs.google.com/document/d/1gzqLIx1UBdQGeVXgIquVJL9VbYfEhzgd6AtO_fJ7PCg/preview";
    this.props.openPDFModal(resumePDFUrl, "Sarah Kitten - Resume");
  }

  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/me-white.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! <br />I'm Sarah</h1>
                          <p><a className="btn btn-primary btn-learn" href="#" onClick={this.handleResumeClick}>View Resume <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/me-white-2.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Check out <br />my work!</h1>
                          <p><a className="btn btn-primary btn-learn"href="https://github.com/sarahkitten" target="_blank" rel="noopener noreferrer">View Github <i className="icon-github" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/me-white-3.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I also write <br/>music!</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://soundcloud.com/sarah-kitten-140422036" target="_blank" rel="noopener noreferrer">My Soundcloud <i className="icon-soundcloud" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
