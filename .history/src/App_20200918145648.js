import React from 'react';
import logo from './logo.svg';
import './App.css';
import Introduction from './components/introduction.js'
import About from './components/aboutMe.js';
import EducationTimeline from './components/timeline'
import Sidebar from './components/sidebar.js';

function App() {
  return (
    <div id="colorlib-page">
        <div id="container-wrap">
		<Sidebar></Sidebar>
		<div id="colorlib-main">
			<Introduction></Introduction>
			<EducationTimeline></EducationTimeline>
			<About></About>
          	</div>
      	</div>
      </div>
  );
}

export default App;
