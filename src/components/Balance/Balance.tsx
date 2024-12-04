import React from 'react';
import './Balance.scss';
import { BalanceProps } from '../../interfaces/index';

function Balance({styleProp, balance, heading}: BalanceProps) {
    return (
      <>
        <div className={`${styleProp} finance`}>
          <h5>{heading}</h5>  
          <p>${balance.toFixed(2)}</p>  
        </div>
      </>
    )    
  }

export default Balance;