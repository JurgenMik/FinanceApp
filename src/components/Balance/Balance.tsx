import React from 'react';
import './Balance.scss';

interface BalanceProps {
    styleProp: string,
    balance: number,
    heading: string
}

function Balance({styleProp, balance, heading}: BalanceProps) {
    return (
      <>
        <div className={`${styleProp} finance`}>
          <h5>{heading}</h5>  
          <p>${balance}</p>  
        </div>
      </>
    )    
  }

export default Balance;