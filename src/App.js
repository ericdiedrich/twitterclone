import React from 'react';
import './App.css';
import Nav from './components/navbar'
import Main from './components/main'
// import TrendsSingle from './components/trendssingle';
// import WhoToFollow from './components/WhoToFollow';
import Rightside from './components/Rightside'

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      {/* <Search /> */}
      {/* <Trend /> */}
      {/* <Search /> */}
      <Rightside />
    </div>
  );
}

export default App;
