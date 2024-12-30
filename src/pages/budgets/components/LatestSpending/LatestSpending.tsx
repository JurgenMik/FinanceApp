import React, { useEffect, useState } from 'react';
import './LatestSpending.scss';
import { MdArrowRight } from '../../../../assets/index';
import { Link } from 'react-router-dom';
import type { LatestSpendingProps, Transaction } from '../../../../interfaces';
import { handleFormatDate } from '../../../../utils';

function LatestSpending({transactions, category}: LatestSpendingProps) {
  
  const [latest, setLatest] = useState<Transaction[]>([]);

  useEffect(() => {
    handleGetLatestTranByCat();
  }, [transactions]);

  const handleGetLatestTranByCat = () => {
    const targetMonth = 7;
    const startDate   = new Date(2024, targetMonth - 1, 2);
    const endDate     = new Date(2024, targetMonth, 31);

    const recentSpendings = transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date); 

      return transactionDate >= startDate      && 
             transactionDate <= endDate        &&
             transaction.category === category &&
             !transaction.recurring;
      }); 
    
    setLatest(recentSpendings.slice(0, 3));
  }

  return ( 
    <div className="main-container-latest-spending">
      <div className="sub-container-latest-spending-heading">
        <h2>Latest Spending</h2> 
        <Link to="/transactions" id="link">
          <p>See All</p>
          <MdArrowRight id="arrow-right" />
        </Link> 
      </div> 
      {latest.map((spending) => {
        return (
          <div 
            className="sub-container-spending" 
            key={spending.category + spending.amount}
          >
            <div className="spending-source">
              <img 
                src={spending.avatar} 
                alt="avatar"
                />
              <h2>{spending.name}</h2>
            </div>
            <div className="spending-info">
              <p>{`-$${Math.abs(spending.amount)}`}</p>
              <p id="trans-date">
                {handleFormatDate(spending.date)}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default LatestSpending;