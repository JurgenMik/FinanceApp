import React from 'react';
import type { Allocations, TransactionsState  } from '../../../../interfaces';
import { useSelector } from 'react-redux';
import { handleSpendingByCategory} from '../../../../utils/index';

function BudgetsCategories({resources}: Allocations) {

  const transactions = useSelector((state: {transactions: TransactionsState}) => state.transactions);  

  return (
      <>
        {resources.map((resource: Allocations | any) => (
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
                <p>
                  ${handleSpendingByCategory(transactions.transactions, resource.category)}
                </p>
                <p id="summary-total">
                  of ${resource.maximum.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
}

export default BudgetsCategories;