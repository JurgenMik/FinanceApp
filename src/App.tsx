import React, { useState } from 'react';
import './App.scss';
import MainMenu from './components/MainMenu/MainMenu';

function App() {

  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const handleMinimizeMenu = () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
    else {
      setIsExpanded(true);
    }
  }
  
  return ( 
    <div className="main">
      <div className="main-sidebar">
        <MainMenu 
          handleMinimizeMenu={handleMinimizeMenu}
          isExpanded={isExpanded}
        />
      </div>
      <div className="main-pages">
      
      </div>
    </div>
  );
}

export default App;
