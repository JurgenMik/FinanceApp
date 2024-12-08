import React from 'react';
import './TotalBills.scss';
import { FaMoneyCheck } from '../../../../assets/index';

function TotalBills({total}: {total: string}) {
  return ( 
    <div className="main-container-total-bills">
      <FaMoneyCheck id="icon-bill" />
      <div className="sub-container-total-bills">
        <h1>Total Bills</h1>
        <p>${total}</p>
      </div>
    </div>
  );
}

export default TotalBills;