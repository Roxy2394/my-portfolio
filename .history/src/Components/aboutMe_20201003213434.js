import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

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
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justify="center">
                            column 1
                            </Grid>
                        </Grid>
                        
                    </Grid>
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