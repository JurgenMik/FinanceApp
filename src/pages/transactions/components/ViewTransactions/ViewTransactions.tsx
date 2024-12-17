import React, { useMemo, useRef } from 'react';
import './ViewTransactions.scss';
import { useSelector } from 'react-redux';
import type { 
  Transaction, 
  TransactionsState, 
  ViewTransactionsProps 
} from '../../../../interfaces';
import { handleFormatDate, handleSortEntries } from '../../../../utils';
import RowHeader from '../../../../components/RowHeader/RowHeader';

function ViewTransactions({sort, search, filter}: ViewTransactionsProps) {

  const transactionsState = useSelector((state: {transactions: TransactionsState}) => state.transactions);

  const prevSort   = useRef(sort);
  const prevFilter = useRef(filter);

  const handleFilterTransactions = (transactions: Transaction[]) => {
    if (filter === 'All') { return transactions; }

    return transactions.filter((transaction) => {
      return transaction.category === filter
    });
  }
  
  const filteredOrSortedTransactions = useMemo(() => {
    let transactions = [...transactionsState.transactions];

    if (prevSort.current !== sort) { transactions = handleSortEntries(sort, transactions, ''); }
    
    if (prevFilter.current !== filter) { transactions = handleFilterTransactions(transactions); }

    if (search) { 
      transactions = transactions.filter((transaction: Transaction) => transaction.name.toLocaleLowerCase()
      .includes(search.toLocaleLowerCase()));   
    }

    return transactions;
  
  }, [search, sort, filter, transactionsState.transactions]);

  return ( 
    <div className="main-container-view-transactions">
      <RowHeader source={'transactions'} />
      <div className="sub-container-view-transactions-content">
        {filteredOrSortedTransactions?.slice(0, 5).map((transaction: Transaction) => {
            return (
              <div 
                className="container-content"
                key={transaction.category + transaction.date}
              >
                <div className="transaction-source">
                  <img 
                    src={transaction.avatar} 
                    alt="avatar" 
                  />
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