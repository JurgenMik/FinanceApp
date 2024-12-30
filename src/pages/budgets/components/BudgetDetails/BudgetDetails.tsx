import React from 'react';
import './BudgetDetails.scss';
import type { Allocations, TransactionsState } from '../../../../interfaces/index';
import { HiOutlineDotsHorizontal } from '../../../../assets/index';
import { useSelector } from 'react-redux';
import { handleSpendingByCategory} from '../../../../utils/index';
import ProgressBar from '../../../../components/ProgressBar/ProgressBar';

function BudgetDetails({resources}: Allocations) {

  const transactions = useSelector((state: {transactions: TransactionsState}) => state.transactions);

  const handleBudgetSpendingAsInt = (category: string): number => {
    return parseInt(handleSpendingByCategory(transactions.transactions, category));
  }

  return (
    <>
      {resources.map((budget) => {
        return (
            <div 
              className="main-container-budget-details" 
              key={budget.category}
            >
              <div className="sub-container-budget-details-heading">
                <div className="container-title">
                  <span style={{backgroundColor: budget.theme}} />
                  <h2>{budget.category}</h2>
                </div>
                <HiOutlineDotsHorizontal 
                  id="options" 
                  onClick={() => ""}
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
                    {budget.maximum - handleBudgetSpendingAsInt(budget.category) < 1 
                      ? <p>{`-$${Math.abs(budget.maximum - handleBudgetSpendingAsInt(budget.category))}`}</p>
                      : <p>{`$${budget.maximum - handleBudgetSpendingAsInt(budget.category)}`}</p>
                    }
                  </div>
                </div> 

              </div>
            </div>
        )
      })}
    </>
  );
}

export default BudgetDetails;