import React from 'react';
import './Finances.scss';
import Balance from '../../../../components/Balance/Balance';
import type { HoldingsProps } from '../../../../interfaces/index';

function Finances({balance}: HoldingsProps) {
  return (
    <div className="main-container-fin">
      <Balance 
        styleProp={'sub-container-balance'} 
        balance={balance.current} 
        heading={'Current Balance'}
      />
      <Balance 
        styleProp={'sub-container-income'} 
        balance={balance.income} 
        heading={'Income'} 
      /> 
      <Balance 
        styleProp={'sub-container-expenses'} 
        balance={balance.expenses} 
        heading={'Expenses'} 
      />  
    </div>
  )    
}

export default Finances;