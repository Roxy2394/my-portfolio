import React from 'react';
import logo from './logo.svg';
import './App.css';
import Introduction from './components/introduction.js'
import About from './components/aboutMe.js';
// import Projects from './Components/timeline'
// import Blog from './components/blog'
import Timeline from './components/timeline'
import Sidebar from './components/sidebar.js';

function App() {
  return (
    <div id="colorlib-page">
        <div id="container-wrap">
		<Sidebar></Sidebar>
		<div id="colorlib-main">
			<Introduction></Introduction>
			<About></About>
			<Timeline></Timeline>
          	</div>
      	</div>
      </div>
  );
}

export default App;
