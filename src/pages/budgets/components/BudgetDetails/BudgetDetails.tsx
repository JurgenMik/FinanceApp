import React from 'react';
import './BudgetDetails.scss';
import type { Allocations, TransactionsState, Budget, FinanceProps } from '../../../../interfaces/index';
import { useSelector } from 'react-redux';
import { handleSpendingByCategory } from '../../../../utils/index';
import ProgressBar from '../../../../components/ProgressBar/ProgressBar';
import LatestSpending from '../LatestSpending/LatestSpending';
import FundHeading from '../../../../components/FundHeading/FundHeading';

function BudgetDetails({finances, resources, setFinanceData}: Allocations | any) {

  const transactions = useSelector((state: {transactions: TransactionsState}) => state.transactions);

  const handleBudgetSpendingAsInt = (category: string): number => {
    return parseInt(handleSpendingByCategory(transactions.transactions, category));
  }

  const handleIsBudgetBalanceNegative = (budget: Budget) => {
    const isNegative = budget.maximum - handleBudgetSpendingAsInt(budget.category) < 1; 
    const remaining  = budget.maximum - handleBudgetSpendingAsInt(budget.category);

    return { isNegative, remaining };
  }

  const handleDeleteBudget = (fund: string): void => {
    const updatedBudgets = resources.filter((budget: Budget) => budget.category !== fund);
    
    setFinanceData({...finances, budgets: updatedBudgets});
  }

  const handleEditBudget = (fund: string, spendingLimit: number): void => {
    if (spendingLimit === 0) { return; }

    setFinanceData((prevFinances: FinanceProps) => {
      const updatedBudgets = prevFinances.budgets.map((budget: Budget) => {
        if (budget.category === fund) {
          return {...budget, maximum: spendingLimit};
        }
        return budget;
      });

      return {...prevFinances, budgets: updatedBudgets};
    });
  }

  return (
    <>
      {resources.map((budget: Budget) => {
        const { isNegative, remaining } = handleIsBudgetBalanceNegative(budget);
        return (
          <div 
            className="main-container-budget-details" 
            key={budget.category}
          >
            <div className="sub-container-budget-details-heading">
              <FundHeading 
                name={budget.category} 
                theme={budget.theme}
                source={'Budget'}
                handleDeleteFund={handleDeleteBudget}
                handleEditBudget={handleEditBudget}
                max={budget.maximum}
              />      
            </div>
            <div>
              <h2 id="budget-total">
                Maximum of ${budget.maximum.toFixed(2)}
              </h2>
              <ProgressBar
                max={budget.maximum}
                progress={handleBudgetSpendingAsInt(budget.category)} 
                theme={budget.theme}
                source={''}
              />
              <div className="container-budget-balance">
                <div className="container-spent">
                  <span style={{backgroundColor: budget.theme}} />
                  <h3>Spent</h3>
                  <p>
                    ${handleSpendingByCategory(transactions.transactions, budget.category)}
                  </p>
                </div>
                <div className="container-remaining">
                  <span id="remaining" />
                  <h3>Remaining</h3>
                  {isNegative
                    ? <p>{`-$${Math.abs(remaining)}`}</p>
                    : <p>{`$${remaining}`}</p>
                  }
                </div>
              </div> 
              <LatestSpending 
                transactions={transactions.transactions} 
                category={budget.category} 
              />
            </div>
          </div>
        )
      })}
    </>
  );
}

export default BudgetDetails;