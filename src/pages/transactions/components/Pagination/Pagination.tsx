import React from 'react';
import './Pagination.scss';
import { MdArrowLeft, MdArrowRight } from '../../../../assets/index';

function Pagination() {
  return ( 
    <div className="main-container-pagination">
      <button type="button">
        <MdArrowLeft id="icon-dir" />
        Prev 
      </button>
      <div className="sub-container-pagination">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>   
      <button type="button"> 
        Next 
        <MdArrowRight id="icon-dir" />
      </button>
    </div>
  );
}

export default Pagination;