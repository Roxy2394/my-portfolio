import React, { Component } from 'react'

export default class WorkTimeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="workTimeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>askneo.io <span>Present</span></h2>
                        <p>Software Engineer</p>
                        <p>Full Stack Web Development, Node.js, MongoDB, REST APIs, Amazon Web Services, Javascript, React</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>New York University Opportunity Programs <span>Present</span></h2>
                        <p>Adjunct Instructor/ Tutor</p>
                        <p>Data Structures and Algorithms, Python Programming, Object Oriented Programming in C++, Matlab for Engineers, Operating Systems, Machine Learning</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>SquarePlan <span>2020-2019</span></h2>
                        <p>Software Engineering Intern</p>
                        <p>GCp, AWS, Javascript, Node.js, MongoDB, React</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>ScrollGrade<span>2019-2018</span></h2>
                        <p>Software Engineering Intern</p>
                        <p>AWS, Python, Machine Learning Algorithms, Natural Language Processing</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>NYU-X Lab <span>2018-2018</span></h2>
                        <p>Software Engineering Intern for Smart Envi</p> 
                        <p>TCP/IP Protocols, Python, WebRTC</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Tamkang University <span>2018-2018</span></h2>
                        <p>Researcher</p> 
                        <p>Python, TensorFlow, Machine Learning Algorithms, Deep Learning Algorithms, Keras</p>
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