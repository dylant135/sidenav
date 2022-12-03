import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <h1>Side Nav</h1>
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
