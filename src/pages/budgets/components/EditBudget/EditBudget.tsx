import React, { useState } from 'react';
import './EditBudget.scss';
import { IoCloseCircleOutline, BsCurrencyDollar } from '../../../../assets/index';
import type { EditBudgetProps } from '../../../../interfaces';

function EditBudget({category, setShowEdit, handleEditBudget, max}: EditBudgetProps) {

  const [newLimit, setNewLimit] = useState<number>(0);

  const handleSpendingLimitChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewLimit(parseInt(e.target.value));
  }

  return ( 
    <div className="modal-overlay">
      <div className="main-container-edit-budget">
        <div className="sub-container-edit-budget-heading">
          <h2>Edit Budget</h2>
          <IoCloseCircleOutline
            onClick={() => setShowEdit(false)}
            id="close-modal" 
          />
        </div>
        <p>
          As your budgets change, feel free to update 
          your spending limits.
        </p>
        <div className="sub-container-edit-details">
          <div>
            <label htmlFor="category">
              Budget Category
            </label>
            <input 
              id="category"
              value={category} 
              readOnly 
            />
          </div>
          <div>
            <label htmlFor="target">
              Maximum Spend
            </label>
            <input 
              id="target"
              onChange={(e) => handleSpendingLimitChange(e)} 
              placeholder={String(max)}
            />
            <BsCurrencyDollar id="target-input" />
          </div>
        </div>
        <button 
          type="button"
          onClick={() => {
            handleEditBudget(category, newLimit);
            setShowEdit(false);
          }}
          id="save"
        >
          Save Changes
        </button>
      </div>  
    </div> 
  );
}

export default EditBudget;