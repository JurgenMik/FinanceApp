import React from 'react';
import './Categories.scss';
import { useSelector } from 'react-redux';
import type { 
  Savings, 
  Pot, 
  Allocations, 
  TransactionsState, 
  Budget 
} from '../../../../interfaces/index';
import { handleCalculateTotals } from '../../../../utils';

function Categories({resources, styleProp, category, page}: Savings | any) {

  const transactionsState = useSelector((state: {transactions: TransactionsState}) => state.transactions);

  let showLimited = resources;

  if (category === 'pots') { showLimited = resources.slice(0, 4); }

  const handleOverviewCategories = () => {
    return (
      <>
        {showLimited.map((resource: Pot | Allocations | any) => (
          <div
            className="container-category"
            key={category === 'pots' ? resource.name : resource.category}
          >
            <span 
              id="theme" 
              style={{backgroundColor: resource.theme}} 
            />
            <div>
              {category === 'pots' ? (
                <>
                  <p id="heading-cat">{resource.name}</p>
                  <p>${resource.total}</p>
                </>
              ) : (
                <>
                  <p id="heading-cat">{resource.category}</p>
                  <p>${resource.maximum.toFixed(2)}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </>
    );
  }

  const handleBudgetsCategories = () => {
    return (
      <>
        {showLimited.map((resource: Allocations | any) => (
          <div
            className="container-category-budgets"
            key={resource.category}
          >
            <span
              id="theme"
              style={{backgroundColor: resource.theme}}
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

  const handleMainContStyleProps = (): object => {
    return ({
      gridTemplateColumns: styleProp,
      width: page === 'budgets' ? '90%' : '50%'
    });
  }
  
  return ( 
    <div 
      className="main-container-categories"
      style={handleMainContStyleProps()}
    >
      {page === 'budgets' ? handleBudgetsCategories() : handleOverviewCategories()} 
    </div>
  );
}

export default Categories;