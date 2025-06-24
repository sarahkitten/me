import React, { Component } from 'react'

export default class Blog extends Component {
  handleBlogClick = (blogUrl, title) => (e) => {
    e.preventDefault();
    this.props.openPDFModal(blogUrl, title);
  }

  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="#" onClick={this.handleBlogClick("https://docs.google.com/document/d/1W0YnPBSd0aAbFkKMOXJmM6ZSADa5N_Zq8QbnGYuLilA/preview", "AI and the Weird New Authenticity")} className="blog-img"><img src="images/auth.png" className="img-responsive" alt="Blog post" /></a>
						<div className="desc">
							<span><small> AI musings </small></span>
							<h3><a href="#" onClick={this.handleBlogClick("https://docs.google.com/document/d/1W0YnPBSd0aAbFkKMOXJmM6ZSADa5N_Zq8QbnGYuLilA/preview", "AI and the Weird New Authenticity")}>AI and the Weird New Authenticity</a></h3>
							<p>From cover letters to creative writing, a fear of ‘sounding like AI’ might free us to sound more like ourselves.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a href="#" onClick={this.handleBlogClick("https://docs.google.com/document/d/169ReY6VdTccMRODsA3jkK3amQzYXfcLjoU7bNSl3xFY/preview", "AI Music Composers are Learning to Work with Humans")} className="blog-img"><img src="images/music.png" className="img-responsive" alt="Blog post" /></a>
						<div className="desc">
							<span><small> Tech and Music </small></span>
							<h3><a href="#" onClick={this.handleBlogClick("https://docs.google.com/document/d/169ReY6VdTccMRODsA3jkK3amQzYXfcLjoU7bNSl3xFY/preview", "AI Music Composers are Learning to Work with Humans")}>AI Music Composers are Learning to Work with Humans</a></h3>
							<p>The researchers behind the A.I. album “Hello World” reflect on the decade-long Flow Machines project and the future of human-machine collaboration in music.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a  className="blog-img"><img src="images/blog-1.jpg" className="img-responsive" alt="Blog post" /></a>
						<div className="desc">
							<span><small>Coming Soon</small> | <small> Frontend Development </small></span>
							<h3><a href="#" >AI-Assisted Frontend Development</a></h3>
							<p>How I'm using AI tools to accelerate frontend development workflows and increase code quality at scale.</p>
						</div>
					</div>
					</div>
				</div>
					{/* <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="#" onClick={this.handleBlogClick("", "AI-Assisted Frontend Development")} className="blog-img"><img src="images/blog-1.jpg" className="img-responsive" alt="Blog post" /></a>
						<div className="desc">
							<span><small>Coming Soon</small> | <small> Frontend Development </small></span>
							<h3><a href="#" onClick={this.handleBlogClick("", "AI-Assisted Frontend Development")}>AI-Assisted Frontend Development</a></h3>
							<p>How I'm using AI tools to accelerate frontend development workflows and increase code quality at scale.</p>
						</div>
					</div>
					</div> */}
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
