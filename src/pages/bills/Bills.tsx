import React from 'react';
import './Bills.scss';
import TotalBills from './components/TotalBills/TotalBills';
import { useSelector } from 'react-redux';
import type { RecurringBillsState } from '../../interfaces';
import { handleCalculateTotals } from '../../utils';

function Bills() {

  const recurringBillsState = useSelector((state: {recurringBills: RecurringBillsState}) => state.recurringBills);

  const totalDue      = handleCalculateTotals(recurringBillsState.due,  'amount');
  const totalPaid     = handleCalculateTotals(recurringBillsState.paid, 'amount');
  const totalUpcoming = handleCalculateTotals(recurringBillsState.upcoming, 'amount');

  const total = Math.abs(totalDue + totalPaid + totalUpcoming).toFixed(2);

  return ( 
    <div className="main-container-rec-bills">
      <h1 id="heading">
        Recurring Bills
      </h1>
      <div className="sub-container-rec-bills">
        <div>
          <TotalBills total={total} />
        </div>
        <div>
         
        </div>
      </div>
    </div>
  );
}

export default Bills;
