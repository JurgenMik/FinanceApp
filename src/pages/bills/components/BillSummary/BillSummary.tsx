import React from 'react';
import './BillSummary.scss';
import type { BillSummaryProps } from '../../../../interfaces';

function BillSummary({due, paid, upcoming}: BillSummaryProps) {
  return ( 
    <div className="main-container-bill-summary">
      <h2 id="header">
        Summary
      </h2>
      <div className="sub-container-bill-summary bills-border">
        <h2>Paid</h2>
        <p>
          {`${paid.bills} ($${Math.abs(paid.amount).toFixed(2)})`}
        </p>
      </div>
      <div className="sub-container-bill-summary bills-border">
        <h2>Total Upcoming</h2>
        <p>
          {`${upcoming.bills} ($${Math.abs(upcoming.amount).toFixed(2)})`}
        </p>
      </div>
      <div className="sub-container-bill-summary" id="due">
        <h2>Due Soon</h2> 
        <p>
          {`${due.bills} ($${Math.abs(due.amount).toFixed(2)})`}
        </p>
      </div>
    </div>
  );
}

export default BillSummary;