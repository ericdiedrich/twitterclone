import React from 'react';
import './App.css';
import Search from './components/search'
import Nav from './components/navbar'
import Main from './components/main'
import Trend from './components/trends'
// import TrendsSingle from './components/trendssingle';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Search />
      <Trend />
    </div>
  );
}

export default App;
