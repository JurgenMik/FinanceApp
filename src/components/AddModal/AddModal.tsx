import React, { useState } from 'react';
import './AddModal.scss';
import { IoCloseCircleOutline, BsCurrencyDollar } from '../../assets/index';
import type { AddModalProps, Budget } from '../../interfaces';
import { categoryOptions, themeOptions } from '../../utils/select';

function AddModal({source, setShowAdd, handleAddNewFund}: AddModalProps) {
  
  const [newBudget, setNewBudget] = useState<Budget>({
    category: '',
    theme: '',
    maximum: 0
  });
  
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewBudget({...newBudget, theme: e.target.value});
  }

  const handleTargetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBudget({...newBudget, maximum: parseInt(e.target.value)});
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewBudget({...newBudget, category: e.target.value});
  }

  return ( 
    <div className="modal-overlay">
      <div className="main-container-add-fund">
        <div className="sub-container-add-fund-heading">
          {source === 'Budget' && <h2>Add New Budget</h2>}
          <IoCloseCircleOutline
            id="close-modal" 
            onClick={() => setShowAdd(false)}
          />
        </div>
        {source === 'Budget' &&
          <p>
            Choose a category to set a spending budget.
            These categories can help you monitor spending.
          </p>
        }
        <div className="sub-container-add-details">
          {source === 'Budget' &&
            <div>
              <label htmlFor="category">
                Budget Category
              </label>
              <select 
                id="category"
                onChange={(e) => handleCategoryChange(e)} 
               >
                 {categoryOptions.map((option) => {
                    return (
                      <option 
                        key={option.value} 
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    )
                 })}
               </select>
            </div>
          }
          <div>
            <label htmlFor="target">
              {source === 'Budget' && 'Maximum Spend'}
            </label>
            <input 
              id="target"
              placeholder={"e.g 2000"}
              onChange={(e) => handleTargetChange(e)} 
            />
            <BsCurrencyDollar id="target-input" />
          </div>
          <div>
            <label htmlFor="theme">
              Theme
            </label>
            <select
              id="theme"
              onChange={(e) => handleThemeChange(e)} 
            >
            {themeOptions.map((option) => {
              return (
                <option 
                  key={option.value} 
                  value={option.value}
                >
                  {option.label}
                </option>
              )
            })}
            </select>
          </div>
        </div>
        <button 
          type="button"
          id="save"
          onClick={() => {handleAddNewFund(newBudget)}}
        >
          {source === 'Budget' && 'Add Budget'}
        </button>
      </div>  
    </div> 
  );
}

export default AddModal;