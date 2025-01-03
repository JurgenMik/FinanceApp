import React, { useState } from 'react';
import './FundHeading.scss';
import { HiOutlineDotsHorizontal } from '../../assets/index';
import type { FundHeadingProps } from '../../interfaces';
import DeleteModal from '../../components/DeleteModal/DeleteModal';
import EditBudget from '../../pages/budgets/components/EditBudget/EditBudget';

function FundHeading({name, theme, source, handleDeleteFund, handleEditBudget, max}: FundHeadingProps) {

  const [showCatOptions, setShowOptions] = useState<string>('');
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState<boolean>(false);
 
  const handleShowOptionsForCat = (): void => {
    if (showCatOptions !== '') { 
      setShowOptions(''); 
    }
    else { 
      setShowOptions(name); 
    }
  }

  return ( 
    <>
      <div className="main-container-fund-heading">
        <span style={{backgroundColor: theme}} />
        <h2>{name}</h2>
        {showCatOptions === name && (
          <div className="select-options">
            <p onClick={() => setShowEdit(true)}>
              Edit {source}
            </p>
            <p 
              id="delete"
              onClick={() => setShowDelete(true)}
            >
              Delete {source}
            </p>
          </div>
        )} 
      </div>
      <HiOutlineDotsHorizontal 
        id="options" 
        onClick={() => handleShowOptionsForCat()} 
      />
      {showDelete && 
        <DeleteModal 
          category={name} 
          setShowDelete={setShowDelete}
          source={source} 
          handleDeleteFund={handleDeleteFund}
        />
      } 
      {showEdit && source === 'Budget' &&
        <EditBudget
          category={name} 
          setShowEdit={setShowEdit}
          handleEditBudget={handleEditBudget}
          max={max ?? 0}
        />
      } 
    </> 
  );
}

export default FundHeading;