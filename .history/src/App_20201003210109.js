import React from 'react';
import logo from './logo.svg';
import './App.css';
import Introduction from './components/introduction.js'
import About from './components/aboutMe.js';
import EducationTimeline from './components/timeline'
import Sidebar from './components/sidebar.js';
import WorkTimeline from './components/workTimeline.js'

function App() {
  return (
    <div id="colorlib-page">
        <div id="container-wrap">
		<Sidebar></Sidebar>
		<div id="colorlib-main">
			<WorkTimeline/>
			<Introduction/>
			<EducationTimeline/>
			<About/>
          	</div>
      	</div>
      </div>
  );
}

export default App;
