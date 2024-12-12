import React, { useEffect, useState } from 'react';
import './ViewBills.scss';
import type { RecurringBillsState, Transaction } from '../../../../interfaces';
import { handleBillingDateFormat } from '../../../../utils';
import { FaCircleExclamation, FaCheckCircle } from '../../../../assets/index';

function ViewBills({due, paid, upcoming}: RecurringBillsState) {
  
  const [totalBills, setBills] = useState<Transaction[]>([]);

  useEffect(() => {
    setBills([...due, ...paid, ...upcoming]);
  }, [due, paid, upcoming]);

  return ( 
    <div className="main-container-view-bills">
      <div className="sub-container-view-bills-row-header">
        <h2>Bill Title</h2>
        <h2>Due Date</h2>
        <h2>Amount</h2>  
      </div> 
      <div className="sub-container-view-bills-content">
        {totalBills.map((bill: Transaction) => {
            let category = '';
           
            if (due.some((b) => b.name === bill.name && b.date === bill.date)) { category = 'due'}
            else if (paid.some((b) => b.name === bill.name && b.date === bill.date)) { category = 'paid'}
            else { category = 'upcoming' }

            return (
              <div className="container-content" key={bill.name + bill.date}>
                <div className="bill-source">
                  <img src={bill.avatar} />
                  <h2>{bill.name}</h2>
                </div>
                <div className="bill-details">
                  <span>
                    <p
                      style={{color: category === 'paid' ? 'hsl(177, 52%, 32%)' : ''}}
                    >
                      {handleBillingDateFormat(new Date(bill.date))}
                    </p>
                    {category === 'due' ? <FaCircleExclamation id="due" /> : category === 'paid' ? 
                      <FaCheckCircle id="paid" /> : ''
                    }
                  </span> 
                  <p id="amount"
                    style={{color: category === 'due' ? 'hsl(7, 58%, 50%)' : ''}}
                  >
                    ${Math.abs(bill.amount).toFixed(2)}
                  </p>
                </div> 
              </div>
            )
        })}
      </div>
    </div>
  );
}

export default ViewBills;