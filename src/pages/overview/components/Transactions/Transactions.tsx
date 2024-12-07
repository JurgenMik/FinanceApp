import React from 'react';
import './Transactions.scss';
import ViewDetails from '../../../../components/ViewDetails/ViewDetails';
import { useSelector } from 'react-redux';
import type { TransactionsState } from '../../../../interfaces';
import { handleFormatDate } from '../../../../utils';

function Transactions() {

    const transactionsState = useSelector((state: {transactions: TransactionsState}) => state.transactions);

    const mostRecentTransactions = transactionsState.transactions.filter((transaction) => {
        const currentDate = new Date(2024, 1, 1);
        const transactionDate = new Date(transaction.date);

        return transactionDate >= currentDate;
    }).slice(0, 5);

    return (
      <div className="main-container-transactions">
        <ViewDetails
          header={'Transactions'}
          text={'View All'} 
          linkTo={'/transactions'} 
        />
        <div className="sub-container-transactions">
          {mostRecentTransactions.map((transaction => {
            return (
              <div className="recent-transactions" 
                key={transaction.name + transaction.amount}
              >
                <div className="recent-transaction-source">
                  <img 
                    src={transaction.avatar} 
                    alt="avatar" 
                  />
                  <p>{transaction.name}</p>
                </div>
                <div className="recent-transaction-details">
                  <div>
                    <p
                      style={{color: Math.sign(transaction.amount) === 1 ? '#277C78' : ''}}
                    >
                      ${transaction.amount}
                    </p>    
                    <p id="date">
                      {handleFormatDate(transaction.date)}
                    </p>  
                   </div>  
                </div>
              </div> 
            )   
          }))}  
        </div>
      </div>
    )    
  }
  
  export default Transactions;