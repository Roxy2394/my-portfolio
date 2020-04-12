import React from 'react';
import logo from './logo.svg';
import './App.css';
import Introduction from './components/introduction'
import About from './components/aboutMe.js';
// import Projects from './Components/timeline'
// import Blog from './components/blog'
// import Timeline from './components/timeline'
import Sidebar from './components/sidebar.js';

function App() {
  return (
    <div id="colorlib-page">
        <div id="container-wrap">
		<Sidebar></Sidebar>
		<div id="colorlib-main">
			<Introduction></Introduction>
			<About></About>
			{/* <Timeline></Timeline> */}
          	</div>
      	</div>
      </div>
    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
