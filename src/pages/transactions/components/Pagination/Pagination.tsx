import React from 'react';
import './Pagination.scss';
import { MdArrowLeft, MdArrowRight } from '../../../../assets/index';
import type { PaginateProps, TransactionsState } from '../../../../interfaces';
import { useSelector } from 'react-redux';

function Pagination({page, setPage}: PaginateProps) {

  const transactionsState = useSelector((state: {transactions: TransactionsState}) => state.transactions);

  const totalPages = Math.ceil(transactionsState.transactions.length / 5);

  const handleUpdatePageCount = (action: string): void => {
    if (action === 'previous' && page > 1) { 
      setPage(page - 1); 
    } 
    else if (action === 'next' && page < totalPages) { 
      setPage(page + 1); 
    }
  }

  const paginatorButtons = Array.from({ length: totalPages }, (_, i) => i + 1);

  return ( 
    <div className="main-container-pagination">
      <button 
        type="button"
        onClick={() => handleUpdatePageCount('previous')}
      >
        <MdArrowLeft id="icon-dir" />
        Prev 
      </button>
      <div className="sub-container-pagination">
        {paginatorButtons.map((value: number) => {
            return (
                <button 
                  className={page === value ? 'active' : ''} 
                  onClick={() => setPage(value)}
                  key={value}
                >
                  {value}
                </button> 
            )
        })}
      </div>   
      <button 
        type="button"
        onClick={() => handleUpdatePageCount('next')}
      > 
        Next 
        <MdArrowRight id="icon-dir" />
      </button>
    </div>
  );
}

export default Pagination;