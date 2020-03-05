import React from 'react';
import './App.css';
// import Search from './components/search'
import Nav from './components/navbar'
import Main from './components/main'
// import WhoToFollow from './components/WhoToFollow';
import Rightside from './components/Rightside'

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      {/* <Search /> */}
      <Rightside />
    </div>
  );
}

export default App;
