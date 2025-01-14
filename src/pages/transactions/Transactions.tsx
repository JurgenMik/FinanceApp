import React, { useState } from 'react';
import './Transactions.scss';
import MappingControls from '../../components/MappingControls/MappingControls';
import ViewTransactions from '../transactions/components/ViewTransactions/ViewTransactions';
import Pagination from './components/Pagination/Pagination';

function Transactions() {

  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<string>('');
  const [filter, setFilter] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  return ( 
    <div className="main-container-trans-transactions">
      <h1 id="heading">
        Transactions
      </h1> 
      <div>
        <MappingControls 
          placeholder={'Search Transactions'}
          setSearch={setSearch} 
          setSort={setSort}
          setFilter={setFilter}
        /> 
        <ViewTransactions
          search={search}
          sort={sort}
          filter={filter}
          page={page}
        /> 
        <Pagination
          page={page}
          setPage={setPage}
        />  
      </div>
    </div>
  );
}

export default Transactions;