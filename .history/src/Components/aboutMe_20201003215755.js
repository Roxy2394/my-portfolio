import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="skills">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <h2 className="colorlib-heading">Skills</h2>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                        <h3>Primary Skills</h3>
                        <body>JavaScript
                            <br />Node.js
                            <br />React
                            <br />Amazon Web Services
                            <br />MongoDB
                            <br />Python
                            <br />RESTful APIs
                            <br />Git/Github
                            <br /> Google Cloud Platform
                        </body>
                        </Grid>
                        <Grid item xs={6}>
                        <h3>Secondary Skills</h3>
                        <body>Java
                            <br />C++
                            <br />R
                            <br />SQL
                            <br />MATLAB
                            <br />CSS
                            <br />HTML
                            <br />Firebase
                            <br />MySQL
                        
                        </body>
                        </Grid>
                    </Grid>
                    
                    {/* <p>, , , , R, , , , </p>
                    <p>, .js, Hadoop, Spark, MapReduce, , Numpy, Pandas, Scikit-learn, Keras, Tensorflow, D3.js, </p>
                    <p>Ama), , , , </p> */}
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