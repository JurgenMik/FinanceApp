import React from 'react';
import './Overview.scss';
import Finances from './components/Finances/Finances';
import Pots from './components/Pots/Pots';
import Budgets from './components/Budgets/Budgets';
import Bills from './components/Bills/Bills';
import type { FinanceProps } from '../../interfaces/index';

function Overview({finances}: FinanceProps | any) {
  return ( 
    <div className="main-container-overview">
      <h1 id="heading">
        Overview
      </h1>  
      <Finances balance={finances.balance} />
      <div className="sub-container-overview">
        <div>
          <Pots resources={finances.pots} />
        </div>
        <div>
          <Budgets resources={finances.budgets} />
          <Bills />
        </div>  
      </div>
    </div>
  );
}

export default Overview;