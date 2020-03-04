import React from 'react';
import './App.css';
import Search from './components/search'
import Nav from './components/navbar'
import Main from './components/main'

function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Search />
    </div>
  );
}

export default App;
