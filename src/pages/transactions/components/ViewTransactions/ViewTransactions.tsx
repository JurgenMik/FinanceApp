import React from 'react';
import './ViewTransactions.scss';
import { useSelector } from 'react-redux';
import type { Transaction, TransactionsState } from '../../../../interfaces';
import { handleFormatDate } from '../../../../utils';

function ViewTransactions() {
    
  const transactionsState = useSelector((state: {transactions: TransactionsState}) => state.transactions);

  return ( 
    <div className="main-container-view-transactions">
      <div className="sub-container-view-transactions-row-header">
        <h2>Recipient / Sender</h2>
        <h2>Category</h2>
        <h2>Transaction Date</h2>
        <h2>Amount</h2>   
      </div> 
      <div className="sub-container-view-transactions-content">
        {transactionsState.transactions.slice(0, 5).map((transaction: Transaction) => {
            return (
              <div 
                className="container-content"
                key={transaction.category + transaction.date}
              >
                <div className="transaction-source">
                  <img src={transaction.avatar} />
                  <h2>{transaction.name}</h2>
                </div>
                <div className="transaction-details">
                  <p>{transaction.category}</p>  
                  <p>{handleFormatDate(transaction.date)}</p>  
                  <p
                    id="amount"
                    style={{color: Math.sign(transaction.amount) === 1 ? '#277C78' : ''}}
                  >
                    {Math.sign(transaction.amount) === 1 
                      ? 
                        `+ $${Math.abs(transaction.amount).toFixed(2)}` 
                      : 
                        `- $${Math.abs(transaction.amount).toFixed(2)}`
                    }  
                  </p>    
                </div>
              </div>
            )
        })}    
      </div>
    </div>
  );
}

export default ViewTransactions;