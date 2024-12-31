import React from 'react';
import './FundHeading.scss';
import { HiOutlineDotsHorizontal } from '../../assets/index';
import type { FundHeadingProps } from '../../interfaces';

function FundHeading({name, theme}: FundHeadingProps) {
  return ( 
    <>
      <div className="main-container-fund-heading">
        <span style={{backgroundColor: theme}} />
        <h2>{name}</h2>
      </div>
      <HiOutlineDotsHorizontal 
        id="options" 
        onClick={() => ""} 
      />    
    </> 
  );
}

export default FundHeading;