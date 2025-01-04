import React from 'react';
import './DeleteModal.scss';
import type { DeleteModalProps } from '../../interfaces';
import { IoCloseCircleOutline } from '../../assets/index';

function DeleteModal({category, setShowDelete, source, handleDeleteFund}: DeleteModalProps) {
  return ( 
    <div className="modal-overlay">
      <div className="main-container-delete-modal">
        <div className="sub-container-delete-modal-heading">
          <h2>Delete '{category}'?</h2>
          <IoCloseCircleOutline
            id="close-modal" 
            onClick={() => setShowDelete(false)}
          />
        </div> 
        <p>
          Are you sure you want to delete this {source.toLocaleLowerCase()}? This action cannot be reversed,
          and all the data inside it will be removed forever.
        </p>
        <div className="sub-container-delete-action">
          <button 
            type="button"
            onClick={() => handleDeleteFund(category)}
            id="confirm-delete"
          >
            Yes, Confirm Deletion
          </button>
          <button 
            type="button"
            onClick={() => setShowDelete(false)}
          >
            No, Go Back
          </button>
        </div>
      </div>  
    </div> 
  );
}

export default DeleteModal;