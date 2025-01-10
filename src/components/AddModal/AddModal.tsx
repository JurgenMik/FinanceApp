import React, { useState } from 'react';
import './AddModal.scss';
import { IoCloseCircleOutline, BsCurrencyDollar } from '../../assets/index';
import type { AddModalProps, Budget, Pot } from '../../interfaces';
import { categoryOptions, themeOptions } from '../../utils/select';

function AddModal({source, setShowAdd, handleAddNewFund}: AddModalProps) {

  const [charCount, setCharCount] = useState<number>(20);
  const [isValidCount, setIsValid] = useState<boolean>(true);

  const [newPot, setNewPot] = useState<Pot>({
    name: '',
    target: 0.00,
    total: 0.00,
    theme: ''
  });
  
  const [newBudget, setNewBudget] = useState<Budget>({
    category: '',
    theme: '',
    maximum: 0.00
  });
  
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (source === "Budget") {
      setNewBudget({...newBudget, theme: e.target.value});
    }
    else {
      setNewPot({...newPot, theme: e.target.value});
    }
  }

  const handleTargetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (source === "Budget") {
      setNewBudget({...newBudget, maximum: parseInt(e.target.value)});
    }
    else {
      setNewPot({...newPot, target: parseInt(e.target.value)});
    }
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    if (source === "Budget") {
      setNewBudget({...newBudget, category: e.target.value});
    }
    else {
      let maxChar = 20;
      
      setCharCount(maxChar - e.target.value.length);

      maxChar - e.target.value.length <= 0 ? setIsValid(false) : setIsValid(true);

      setNewPot({...newPot, name: e.target.value}); 
    }
  }

  const handleValidateCharStyle = () => {
    return ({
      color: !isValidCount ? 'red' : 'hsl(0, 0%, 41%)'
    }); 
  }

  const handleValidatePotAdd = () => {
    if (newPot.name && isValidCount) { handleAddNewFund(newPot); }
  }

  return ( 
    <div className="modal-overlay">
      <div className="main-container-add-fund">
        <div className="sub-container-add-fund-heading">
          {source === 'Budget' ? <h2>Add New Budget</h2> : <h2>Add New Pot</h2>}
          <IoCloseCircleOutline
            id="close-modal" 
            onClick={() => setShowAdd(false)}
          />
        </div>
        {source === 'Budget' 
        ?
          <p>
            Choose a category to set a spending budget.
            These categories can help you monitor spending.
          </p>
        :
          <p>
            Create a pot to set savings targets. These can help keep you on 
            track as yousave for special purchases.
          </p>
        }
        <div className="sub-container-add-details">
          {source === 'Budget' 
          ?
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
          :
            <div>
              <label htmlFor="target">
                Pot Name
              </label>
              <input 
                style={{borderColor: !isValidCount ? 'red' : ''}}
                placeholder={"e.g Rainy Days"}
                onChange={(e) => handleCategoryChange(e)} 
              />
              <BsCurrencyDollar id="target-input" />
              {source === 'Pot' && 
                <div className="container-validate-char">
                  <span 
                    id="char-left"
                    style={handleValidateCharStyle()}
                  >
                    {charCount} characters left
                  </span>
                </div>
              }
            </div>
          }
          <div>
            <label htmlFor="target">
              {source === 'Budget' ? 'Maximum Spend' : 'Target'}
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
          onClick={() => {source === "Budget" ? 
            handleAddNewFund(newBudget) : handleValidatePotAdd() 
          }}
        >
          {source === 'Budget' ? 'Add Budget' : 'Add Pot'}
        </button>
      </div>  
    </div> 
  );
}

export default AddModal;