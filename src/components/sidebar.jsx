import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/me-3.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Sarah Kitten</a></h1>
              <span className="email"><i className="icon-mail"></i> sarahnkitten@gmail.com</span>
              <br></br>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#" data-nav-section="projects">Projects</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://github.com/sarahkitten" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/sarah-kitten/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://soundcloud.com/sarah-kitten-140422036" target="_blank" rel="noopener noreferrer"><i className="icon-soundcloud2" /></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100007689104997" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                {/*<li><a href="https://twitter.com/ddbarochiya" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>*/}
                <li><a href="https://www.instagram.com/sarahnkitten/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                {/*<li><a href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>*/}
              </ul>
            </nav>
            {/*<div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
              </small></p>
              <p><small>
                Something coming soon !!
              </small></p>
              </div> */}
          </aside>
        </div>
      </div>
    )
  }
}
