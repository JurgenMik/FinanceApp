import React from 'react';
import './Overview.scss';
import Finances from './components/Finances/Finances';
import { FinanceProps } from '../../interfaces/index';

function Overview({finances}: FinanceProps | any) {
  return ( 
    <div className="main-container-overview">
      <h1 id="heading">
        Overview
      </h1>  
      <Finances balance={finances.balance} />
    </div>
  );
}

export default Overview;