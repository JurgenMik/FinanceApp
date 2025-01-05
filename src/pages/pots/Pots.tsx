import React, { useState } from 'react';
import './Pots.scss';
import PotDetails from './components/PotDetails/PotDetails';
import type { FinanceProps, Pot } from '../../interfaces/index';
import AddModal from '../../components/AddModal/AddModal';

function Pots({finances, setFinanceData}: FinanceProps | any) {

  const [showAdd, setShowAdd] = useState<boolean>(false);
  
  const handleAddNewPot = (pot: Pot) => {
    if (pot.name === "") { return; }
    
    setFinanceData({...finances,
      pots: [...finances.pots, pot]
    });
  }


  return ( 
    <div className="main-container-pot-pots">
      <div className="sub-container-pot-heading">
        <h1 id="heading">
          Pots
        </h1>
        <button 
          type="button"
          onClick={() => setShowAdd(true)}
        >
          + Add New Pot
        </button>
      </div>
      <div className="sub-container-pot-pots">
        <PotDetails 
          finances={finances}
          resources={finances.pots} 
          setFinanceData={setFinanceData}
        />
      </div>
      {showAdd &&
        <AddModal
          source={'Pot'}
          setShowAdd={setShowAdd}
          handleAddNewFund={handleAddNewPot}
        />
      }
    </div>
  );
}

export default Pots;