import React, { Component } from 'react'
import puzzle from '../puzzle.jpg'
import puzzle2 from '../puzzle2.jpeg'
import puzzle3 from '../puzzle3.jpeg'
import puzzle4 from '../puzzle4.jpeg'

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
                    <h2 className="colorlib-heading">Primary Skills</h2>
                    <p>Python, JavaScript, Java, C++, R, SQL, MATLAB, HTML, CSS</p>
                    <p>REST, Node.js, Hadoop, Spark, MapReduce, Git, Numpy, Pandas, Scikit-learn, Keras, Tensorflow, D3.js, React</p>
                    <p>Amazon Web Services(AWS), Google Cloud Platform (GCP), Github, Firebase, MongoDB, MySQL</p>
                    </div>
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