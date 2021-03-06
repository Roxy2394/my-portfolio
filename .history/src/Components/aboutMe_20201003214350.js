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
                    <h2 className="colorlib-heading">Skills</h2>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                        <h3>Primary Skills</h3>
                        <body>JavaScript</body>
                        <body>Node.js</body>
                        <body>AWS</body>
                        </Grid>
                        <Grid item xs={6}>
                        column 2
                        </Grid>
                    </Grid>
                    
                    {/* <p>Python, JavaScript, Java, C++, R, SQL, MATLAB, HTML, CSS</p>
                    <p>REST, Node.js, Hadoop, Spark, MapReduce, Git, Numpy, Pandas, Scikit-learn, Keras, Tensorflow, D3.js, React</p>
                    <p>Amazon Web Services(AWS), Google Cloud Platform (GCP), Github, Firebase, MongoDB, MySQL</p> */}
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