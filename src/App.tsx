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
import type { FinanceProps, TransactionsState } from './interfaces/index';
import { useDispatch, useSelector } from 'react-redux';
import { setTransactions } from './store/reducers';
import { setRecurringBills} from './store/reducers';

function App() {

  const dispatch = useDispatch();
  const location = useLocation();

  const transactionsState = useSelector((state: {transactions: TransactionsState}) => state.transactions);

  const isDefinedRoute = defaultRoutes.includes(location.pathname);

  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [finances, setFinanceData] = useState<FinanceProps>();

  useEffect(() => {
    handleFetchMockData();
  }, []);

  useEffect(() => {
    if (transactionsState.transactions.length > 0) {
      ['paid', 'due', 'upcoming'].forEach((type) => handleRecurringBillsByCat(type));
    }
  }, [transactionsState.transactions]);
  
  const handleFetchMockData = () => {
    setTimeout(() => {
      setFinanceData(mockData);

      if (mockData) { 
        setIsLoading(false);
      }
      
      dispatch(setTransactions(mockData.transactions));
    }, 3000);
  }
  
  const handleRecurringBillsByCat = (type: string) => {
    const targetMonth = 7; 
    const fromDate    = new Date(2024, targetMonth - 1, 2);
    const currentDate = new Date(2024, targetMonth - 1, 26);
    const dueRange    = new Date(2024, targetMonth, 4);

    const bills = transactionsState.transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date); 

        if (type === 'paid') { 
            return (
                 transaction.recurring       &&
                 transactionDate >= fromDate && 
                 transactionDate <= currentDate
            );
        } 
        else if (type === 'due') {
            return (
                transaction.recurring         &&
                transactionDate > currentDate &&
                transactionDate <= dueRange
            );
        } 
        else { return transaction.recurring &&  transactionDate > dueRange; }
    });

    dispatch(setRecurringBills({key: type, data: bills}));
};

  const handleMinimizeMenu = () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
    else {
      setIsExpanded(true);
    }
  }

  if (isLoading) { return <Loader size={'lg'} center content="loading..." vertical /> }

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
