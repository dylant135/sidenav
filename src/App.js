import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <h1>Side Nav</h1>
      <div className='navContainer'>
        <Sidebar />
        <div className='rightContainer'>
          <Header />
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
