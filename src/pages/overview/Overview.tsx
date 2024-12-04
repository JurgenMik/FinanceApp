import React from 'react';
import './Overview.scss';
import Finances from './components/Finances/Finances';
import Pots from './components/Pots/Pots';
import Budgets from './components/Budgets/Budgets';
import type { FinanceProps } from '../../interfaces/index';

function Overview({finances}: FinanceProps | any) {
  return ( 
    <div className="main-container-overview">
      <h1 id="heading">
        Overview
      </h1>  
      <Finances balance={finances.balance} />
      <div className="sub-container-overview">
        <Pots resources={finances.pots} />
        <Budgets resources={finances.budgets} />
      </div>
    </div>
  );
}

export default Overview;