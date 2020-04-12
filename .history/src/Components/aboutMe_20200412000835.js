import React, { Component } from 'react'
import puzzle from '../puzzle.jpg'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Graduate student of Computer Science at New York University</p>
                    <p>Software Engineering Intern a SquarePlan</p>
                    <p>Adjunct Instructor at NYU Opportunity Programs</p>
                    <p>Tutor at NYU Opportunity Program</p>    
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Teams I've been a part of</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>SquarePlan </h3>
                    <p>Full-stack, AI bot development, data visualization</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                {/* <span className="icon">
                    <i className="icon-phone3" />
                </span> */}
                <div className="desc">
                    <h3>New York University</h3>
                    <p>Adjunct Intructor, Tutor</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>ScrollGrade</h3>
                    <p>Cloud backend architecture, NLP</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>NYU-X Lab</h3>
                    <p>Software Engineering</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/puzzle.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>That's me...<br />Hello!</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/12kgfdXB555YVEj6M44rpEJXj04nsXaE6/view?usp=sharing" target="_blank" rel="noopener noreferrer">View resume<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/puzzle.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I love solving 1000pc jigsaw puzzles</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/Roxy2394" target="_blank" rel="noopener noreferrer">Some puzzles I've solved before <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/puzzle.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>And I'm a creator at heart...</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/Roxy2394" target="_blank" rel="noopener noreferrer"> View Projects<i className="icon-briefcase3" /></a></p>
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
        </section>
      </div>
    )
  }
}