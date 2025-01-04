import React, { useState } from 'react';
import './Budgets.scss';
import BudgetsGlob from '../../components/BudgetsGlob/BudgetsGlob';
import BudgetDetails from './components/BudgetDetails/BudgetDetails';
import type { FinanceProps, Budget } from '../../interfaces/index';
import AddModal from '../../components/AddModal/AddModal';

function Budgets({finances, setFinanceData}: FinanceProps | any) {
  
  const [showAdd, setShowAdd] = useState<boolean>(false);

  const handleAddNewBudget = (budget: Budget) => {
    setFinanceData({...finances,
      budgets: [...finances.budgets, budget]
    });
  }

  return ( 
    <div className="main-container-bud-budgets">
      <div className="sub-container-bud-heading">
        <h1 id="heading">
          Budgets
        </h1>
        <button 
          type="button"
          onClick={() => setShowAdd(true)}
        >
          + Add New Budget
        </button>
      </div>
      <div className="sub-container-bud-budgets">
        <div className="spending-summary">
          <BudgetsGlob
            resources={finances.budgets}
            styleProp={'column'}
            page={'budgets'}
          />
        </div> 
        <div>
          <BudgetDetails 
            resources={finances.budgets}
            finances={finances}
            setFinanceData={setFinanceData} 
          /> 
        </div>
      </div>
      {showAdd &&
        <AddModal
          source={'Budget'}
          setShowAdd={setShowAdd}
          handleAddNewFund={handleAddNewBudget}
        />
      }
    </div>
  );
}

export default Budgets;