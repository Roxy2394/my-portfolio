import React, { Component } from 'react'
import puzzle from '../puzzle.jpg'
import puzzle2 from '../puzzle2.jpeg'
import puzzle3 from '../puzzle3.jpeg'
import puzzle4 from '../puzzle4.jpeg'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="teams" >
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Teams I've been a part of</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-6 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Askneo </h3>
                    <p>Full-stack, AI bot development, data visualization</p>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>New York University</h3>
                    <p>Adjunct Intructor, Tutor</p>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>ScrollGrade</h3>
                    <p>Cloud backend architecture, NLP</p>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>NYU-X Lab</h3>
                    <p>Software Engineering</p>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Tamkang University</h3>
                    <p>Twitter Sarcasm Detection using Deep Learning </p>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center animate-box">
                <div className="services color-7 ">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Tata Consultancy Services</h3>
                    <p>Usability testing of Android applications</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about" data-section="puzzles">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Some of my favorite jigsaw puzzles</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-sm-6 text-center animate-box">
                <div className="services color-1">
                <div className="desc">
                    <img src={puzzle} alt="Puzzle" />
                </div>
                </div>
            </div>
            <div className="col-sm-6 text-center animate-box">
                <div className="services color-5">
                <div className="desc">
                    <img src={puzzle3} alt="Puzzle" />
                </div>
                </div>
            </div>
            <div className="col-sm-6 text-center animate-box">
                <div className="services color-3">
                <div className="desc">
                    <img src={puzzle2} alt="Puzzle" />
                </div>
                </div>
            </div>
            <div className="col-sm-6 text-center animate-box">
                <div className="services color-1">
                <div className="desc">
                    <img src={puzzle4} alt="Puzzle" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}