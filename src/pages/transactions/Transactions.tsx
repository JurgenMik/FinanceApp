import React, { useState } from 'react';
import './Transactions.scss';
import { useSelector } from 'react-redux';
import type { TransactionsState } from '../../interfaces';
import MappingControls from '../../components/MappingControls/MappingControls';

function Transactions() {

  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<string>('');
  const [filter, setFilter] = useState<string>('');

  const transactionsState = useSelector((state: {transactions: TransactionsState}) => state.transactions);

  return ( 
    <div className="main-container-trans-transactions">
      <h1 id="heading">
        Transactions
      </h1> 
      <div className="sub-container-trans-transactions">
        <div>
          <MappingControls 
            placeholder={'Search Transactions'}
            setSearch={setSearch} 
            setSort={setSort}
            setFilter={setFilter}
          />    
        </div>
      </div>
    </div>
  );
}

export default Transactions;