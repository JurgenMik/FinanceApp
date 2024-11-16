import React from 'react';
import './App.scss';
import MainMenu from './components/MainMenu/MainMenu';

function App() {
  return ( 
    <div className="main">
      <div className="main-sidebar">
        <MainMenu />
      </div>
      <div className="main-pages">
      
      </div>
    </div>
  );
}

export default App;
