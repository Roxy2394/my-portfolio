import React, { Component } from 'react'
import puzzle from '../puzzle.jpg'
import puzzle2 from '../puzzle2.jpeg'
import puzzle3 from '../puzzle3.jpeg'
import puzzle4 from '../puzzle4.jpeg'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="projects" >
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">My Projects</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-6 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Dining Concierge Services Chatbot </h3>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Canny Edge Detector</h3>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Text/Voice Controlled Photo Album</h3>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Machine Learning Algorithms</h3>
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