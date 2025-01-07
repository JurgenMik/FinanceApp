import React, { useState } from 'react';
import './EditPot.scss';
import { IoCloseCircleOutline, BsCurrencyDollar } from '../../../../assets/index';
import type { EditPotProps } from '../../../../interfaces';

function EditPot({name, setShowEdit, handleEditPot, target}: EditPotProps) {

  const [newTotal, setNewTotal] = useState<number>(0);

  const handleTargetChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTotal(parseInt(e.target.value));
  }

  return ( 
    <div className="modal-overlay">
      <div className="main-container-edit-pot">
        <div className="sub-container-edit-pot-heading">
          <h2>Edit Pot</h2>
          <IoCloseCircleOutline
            id="close-modal"
            onClick={() => setShowEdit(false)} 
          />
        </div>
        <p>
          If your saving targets change, 
          feel free to update your pots.
        </p>
        <div className="sub-container-edit-details">
          <div>
            <label htmlFor="category">
              Pot Name
            </label>
            <input 
              id="category"
              value={name} 
              readOnly 
            />
          </div>
          <div>
            <label htmlFor="target">
              Target
            </label>
            <input 
              id="target"
              placeholder={String(target.toFixed(2))}
              onChange={(e) => handleTargetChange(e)} 
            />
            <BsCurrencyDollar id="target-input" />
          </div>
        </div>
        <button 
          type="button"
          id="save"
          onClick={() => {
            handleEditPot(name, newTotal, "target");
            setShowEdit(false);
          }}
        >
          Save Changes
        </button>
      </div>  
    </div> 
  );
}

export default EditPot;