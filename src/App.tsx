import React, { useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import defaultRoutes from './utils/index'
import './App.scss';
import MainMenu from './components/MainMenu/MainMenu';
import Overview from './pages/overview/Overview';
import Bills from './pages/bills/Bills';
import Budgets from './pages/budgets/Budgets';
import Pots from './pages/pots/Pots';
import Transactions from './pages/transactions/Transactions';
import NotFound from './pages/notfound/NotFound';

function App() {

  const location = useLocation();

  const isDefinedRoute = defaultRoutes.includes(location.pathname);

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
    <>
      {isDefinedRoute ? 
        <div className="main">
          <div className={isExpanded ? 'main-sidebar' : 'main-sidebar minimized'}>
            <MainMenu 
              handleMinimizeMenu={handleMinimizeMenu}
              location={location.pathname}
              isExpanded={isExpanded}
            />
           </div>
           <div className={isExpanded ? 'main-pages' : 'main-pages minimized'}>
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/Bills" element={<Bills />} />
                <Route path="/Budgets" element={<Budgets />} />
                <Route path="/Pots" element={<Pots />} />
                <Route path="/Transactions" element={<Transactions />} />
              </Routes>
          </div>
        </div>
       : 
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      }
    </>
  );
}


export default App;
