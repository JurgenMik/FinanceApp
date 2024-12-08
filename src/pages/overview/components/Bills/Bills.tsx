import React from 'react';
import './Bills.scss';
import ViewDetails from '../../../../components/ViewDetails/ViewDetails';
import RecurringBills from '../../../../components/RecurringBills/RecurringBills';
import { useSelector } from 'react-redux';
import type { TransactionsState } from '../../../../interfaces/index';
import { handleCalculateTotals } from '../../../../utils';

function Bills() { 
  
  const transactionsState = useSelector((state: {transactions: TransactionsState}) => state.transactions);

  const handleRecurringBillsByCat = (type: string): string => {

    const targetMonth = 7; 
    const fromDate    = new Date(2024, targetMonth - 1, 2);
    const currentDate = new Date(2024, targetMonth - 1, 26);
    const dueRange    = new Date(2024, targetMonth, 4);

    const bills = transactionsState.transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date); 

        if (type === 'paid') { 
            return (
                 transaction.recurring       &&
                 transactionDate >= fromDate && 
                 transactionDate <= currentDate
            );
        } 
        else if (type === 'due') {
            return (
                transaction.recurring         &&
                transactionDate > currentDate &&
                transactionDate <= dueRange
            );
        } 
        else { return transaction.recurring &&  transactionDate > dueRange; }
    }); 
    
    return Math.abs(handleCalculateTotals(bills, 'amount')).toFixed(2);
};

  const paid     = handleRecurringBillsByCat('paid')
  const due      = handleRecurringBillsByCat('due')
  const upcoming = handleRecurringBillsByCat('upcoming')

  return (
    <div className="main-container-bills">
      <ViewDetails 
        header={'Recurring Bills'}
        text={'See Details'} 
        linkTo={'/bills'}
      />   
      <RecurringBills
        title={'Paid bills'}
        amount={paid}
        theme={'#277C78'}
      />
      <RecurringBills 
        title={'Total upcoming'}
        amount={upcoming}
        theme={'#F2CDAC'}
      />
      <RecurringBills
        title={'Due soon'}
        amount={due}
        theme={'#82C9D7'}
      />
    </div>
  )    
}

export default Bills;