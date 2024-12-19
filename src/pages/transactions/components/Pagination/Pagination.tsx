import React from 'react';
import './Pagination.scss';
import { MdArrowLeft, MdArrowRight } from '../../../../assets/index';
import type { PaginateProps } from '../../../../interfaces';

function Pagination({page, setPage}: PaginateProps) {

  const handleUpdatePageCount = (action: string): void => {
    if (action === 'previous' && page !== 1) { 
        setPage(page - 1); 
    } 
    else if (action === 'next' && page !== 5) { 
        setPage(page + 1); 
    }
  }

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
        <button className={page === 1 ? 'active' : ''} onClick={() => setPage(1)}>1</button>
        <button className={page === 2 ? 'active' : ''} onClick={() => setPage(2)}>2</button>
        <button className={page === 3 ? 'active' : ''} onClick={() => setPage(3)}>3</button>
        <button className={page === 4 ? 'active' : ''} onClick={() => setPage(4)}>4</button>
        <button className={page === 5 ? 'active' : ''} onClick={() => setPage(5)}>5</button>
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