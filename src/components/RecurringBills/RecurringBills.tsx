import React from 'react';
import './RecurringBills.scss';
import type { RecurringBillsProps } from '../../interfaces/index';

function RecurringBills({title, amount, theme}: RecurringBillsProps) {
  return (
    <div className="main-container-recurring-bills"
      style={{borderLeft: `0.25rem solid ${theme}`}}
    >
      <h2>{title}</h2>
      <p>${amount}</p>
    </div>
  )    
}

export default RecurringBills;