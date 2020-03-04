import React from 'react';
// import logo from './img/twitterlogo.png';
import './App.css';
import Nav from './components/navbar'
import Main from './components/main'

function App() {
  return (
    <div>
      <div className="App">
        <Nav />
        <Main />
      </div>
    </div>
  );
}

export default App;

