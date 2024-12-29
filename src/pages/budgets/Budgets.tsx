import React from 'react';
import './Budgets.scss';
import BudgetsGlob from '../../components/BudgetsGlob/BudgetsGlob';
import type { FinanceProps } from '../../interfaces/index';

function Budgets({finances}: FinanceProps | any) {
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
        <span className="spending-summary">
          <BudgetsGlob
            resources={finances.budgets}
            styleProp={'column'}
            page={'budgets'}
          />
        </span>   
      </div>
    </div>
  );
}

export default Budgets;