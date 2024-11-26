import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import 'rsuite/Loader/styles/index.css';
import { Loader } from 'rsuite';
import defaultRoutes from './utils/index'
import './App.scss';
import MainMenu from './components/MainMenu/MainMenu';
import Overview from './pages/overview/Overview';
import Bills from './pages/bills/Bills';
import Budgets from './pages/budgets/Budgets';
import Pots from './pages/pots/Pots';
import Transactions from './pages/transactions/Transactions';
import NotFound from './pages/notfound/NotFound';
import mockData from './mock/transactions.json';
import type { FinanceProps } from './interfaces/index';

function App() {

  const location = useLocation();

  const isDefinedRoute = defaultRoutes.includes(location.pathname);

  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [finances, setFinanceData] = useState<FinanceProps>();

  useEffect(() => {
    handleFetchMockData();
  }, []);

  const handleFetchMockData = () => {
    setTimeout(() => {
      setFinanceData(mockData);

      if (mockData) { 
        setIsLoading(false);
      }
    }, 3000);
  }

  const handleMinimizeMenu = () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
    else {
      setIsExpanded(true);
    }
  }

  if (isLoading) { return <Loader size={'md'} center content="loading..." vertical /> }

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
                <Route path="/" element={<Overview finances={finances} />} />
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
