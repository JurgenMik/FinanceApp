import React from 'react';
import './Budgets.scss';
import BudgetsGlob from '../../components/BudgetsGlob/BudgetsGlob';
import BudgetDetails from './components/BudgetDetails/BudgetDetails';
import type { FinanceProps } from '../../interfaces/index';

function Budgets({finances, setFinanceData}: FinanceProps | any) {
  return ( 
    <div className="main-container-bud-budgets">
      <div className="sub-container-bud-heading">
        <h1 id="heading">
          Budgets
        </h1>
        <button 
          type="button"
          onClick={() => ""}
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
    </div>
  );
}

export default Budgets;