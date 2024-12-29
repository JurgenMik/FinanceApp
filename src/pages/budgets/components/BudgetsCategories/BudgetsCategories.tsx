import React from 'react';
import type { Allocations, TransactionsState, Savings } from '../../../../interfaces';
import { useSelector } from 'react-redux';
import { handleCalculateTotals } from '../../../../utils/index';

function BudgetsCategories({showLimited}: Savings | any) {

  const transactionsState = useSelector((state: {transactions: TransactionsState}) => state.transactions);  

  const handleSpendingByCategory = (category: string): string => {
      const targetMonth = 7;
      const startDate   = new Date(2024, targetMonth - 1, 2);
      const endDate     = new Date(2024, targetMonth, 31);
  
      const recentSpendings = transactionsState.transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date); 
        
        return transactionDate >= startDate     && 
               transactionDate <= endDate       &&
               transaction.category == category &&
               !transaction.recurring;
      });
  
    return Math.abs(handleCalculateTotals(recentSpendings, "amount")).toFixed(2); 
  }

  return (
      <>
        {showLimited.map((resource: Allocations | any) => (
          <div
            className="container-category-budgets"
            key={resource.category}
          >
            <span
              id="theme"
              style={{ backgroundColor: resource.theme }}
            />
            <div className="category-details">
              <p id="heading-cat">{resource.category}</p>
              <div className="summary">
                <p>${handleSpendingByCategory(resource.category)}</p>
                <p id="summary-total">of ${resource.maximum.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
}

export default BudgetsCategories;