import React from 'react';
import './Bills.scss';
import ViewDetails from '../../../../components/ViewDetails/ViewDetails';
import RecurringBills from '../../../../components/RecurringBills/RecurringBills';
import { useSelector } from 'react-redux';
import type { RecurringBillsState } from '../../../../interfaces/index';
import { handleCalculateTotals } from '../../../../utils';

function Bills() { 

  const recurringBillsState = useSelector((state: {recurringBills: RecurringBillsState}) => state.recurringBills);

  const totalPaid     = Math.abs(handleCalculateTotals(recurringBillsState.paid, 'amount')).toFixed(2);
  const totalDue      = Math.abs(handleCalculateTotals(recurringBillsState.due, 'amount')).toFixed(2);
  const totalUpcoming = Math.abs(handleCalculateTotals(recurringBillsState.upcoming, 'amount')).toFixed(2);

  return (
    <div className="main-container-bills">
      <ViewDetails 
        header={'Recurring Bills'}
        text={'See Details'} 
        linkTo={'/bills'}
      />   
      <RecurringBills
        title={'Paid bills'}
        amount={totalPaid}
        theme={'#277C78'}
      />
      <RecurringBills 
        title={'Total upcoming'}
        amount={totalUpcoming}
        theme={'#F2CDAC'}
      />
      <RecurringBills
        title={'Due soon'}
        amount={totalDue}
        theme={'#82C9D7'}
      />
    </div>
  )    
}

export default Bills;