import React, { useState, useEffect } from 'react';
import './TransactionModal.scss';
import ProgressBar from '../../../../components/ProgressBar/ProgressBar';
import { IoCloseCircleOutline, BsCurrencyDollar } from '../../../../assets/index';
import type { TransactionModalProps } from '../../../../interfaces/index';
import { handleTargetPercentage } from '../../../../utils';

function TransactionModal({showAddOrWithdraw, resource, setShowTransaction}: TransactionModalProps) {

  const [transaction, setTransaction] = useState<number>(0);
  const [newAmount, setNewAmount] = useState<number>(resource.total); 

  useEffect(() => {
    if (transaction !== 0) { handleCalculateNewAmount(); }
  }, [transaction]);
  
  const handleCalculateNewAmount = () => {
    const updatedAmount = showAddOrWithdraw.type === "add"
        ? resource.total + transaction
        : resource.total - transaction;
        
    setNewAmount(updatedAmount);
  };
  
  const handleTransactionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value); 

    setTransaction(isNaN(value) ? 0 : value); 
  };

  return ( 
    <div className="modal-overlay">
      <div className="main-container-transaction">
        <div className="sub-container-transaction-heading">
          {showAddOrWithdraw.type === "add"
            ? <h2>Add to `{resource.name}`</h2> 
            : <h2>Widthdraw from `{resource.name}`</h2>
          }
          <IoCloseCircleOutline
            id="close-modal"
            onClick={() => 
              setShowTransaction({...showAddOrWithdraw, type: ""}
            )}
          />
        </div>
        <div className="sub-container-pot-details">
          <div className="container-saved">
            <h2>New Amount</h2>
            <p>${newAmount.toFixed(2)}</p>
          </div>
          <div>
            <ProgressBar 
              theme={resource.theme}
              progress={newAmount}
              max={resource.target}
              source={'Pot'}
            />
            <div className="container-progress">
              <p 
                id="percentage"
                style={{color: resource.theme}}
              >
                {handleTargetPercentage(resource.target, newAmount)}%
              </p>
              <p>Target of ${resource.target}</p>
            </div>
          </div>
        </div>
        <div className="sub-container-transaction-action">
          <div>
            <label htmlFor="target">
              {showAddOrWithdraw.type === "add" 
                ? 'Amount to Add' 
                : 'Amount to Widthdraw'
              }
            </label>
            <div className="target-input-container">
              <input
                id="target"
                onChange={(e) => handleTransactionChange(e)}
              />
              <BsCurrencyDollar id="target-input" />
            </div>
          </div>
        </div>
        <button 
          type="button" 
          id="save" 
          onClick={() => {}}
        >
          {showAddOrWithdraw.type === "add" 
            ? 'Confirm Addition' 
            : 'Confirm Widthdrawal'
          }
        </button>
      </div>
    </div>
  );
}

export default TransactionModal;