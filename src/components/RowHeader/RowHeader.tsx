import React from 'react';
import './RowHeader.scss';

function RowHeader({source}: {source: string}) {
  return ( 
    <div className="main-container-view-row-header">
    { source === 'bills' 
      ?
      <>
        <h2>Bill Title</h2>
        <h2>Due Date</h2>
        <h2>Amount</h2>  
      </>
      :
      <>
        <h2>Recipient / Sender</h2>
        <h2>Category</h2>
        <h2>Transaction Date</h2>
        <h2>Amount</h2> 
      </>  
    }  
    </div>
  );
}

export default RowHeader;