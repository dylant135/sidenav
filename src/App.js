import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Home from './pages/Home';

function App() {
  const [active, setActive] = React.useState('Home')
  return (
    <div className="App">
      <h1>Side Nav</h1>
      <div className='navContainer'>
        <Sidebar
          active={active}
          setActive={setActive}
        />
        <div className='rightContainer'>
          <Header
            active={active}
            setActive={setActive}
          />
          <MainContent 
            home={Home}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
