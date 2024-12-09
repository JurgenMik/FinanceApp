import React from 'react';
import './Bills.scss';
import { useSelector } from 'react-redux';
import type { RecurringBillsState } from '../../interfaces';
import { handleCalculateTotals } from '../../utils';
import TotalBills from './components/TotalBills/TotalBills';
import BillSummary from './components/BillSummary/BillSummary';

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
          <BillSummary 
            due={{amount: totalDue, bills: recurringBillsState.due.length}} 
            paid={{amount: totalPaid, bills: recurringBillsState.paid.length}}
            upcoming={{amount: totalUpcoming, bills: recurringBillsState.upcoming.length}} 
          />
        </div>
        <div>
         
        </div>
      </div>
    </div>
  );
}

export default Bills;
