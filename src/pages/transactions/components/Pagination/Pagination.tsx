import React from 'react';
import './Pagination.scss';
import { MdArrowLeft, MdArrowRight } from '../../../../assets/index';
import type { PaginateProps } from '../../../../interfaces';

function Pagination({page, setPage}: PaginateProps) {

  const handleUpdatePageCount = (action: string): void => {
    if (action === 'previous' && page !== 1) { 
        setPage(page - 1); 
    } 
    else if (action === 'next' && page !== 10) { 
        setPage(page + 1); 
    }
  }

  const paginateButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        {paginateButtons.map((value: number) => {
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