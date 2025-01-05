import React from 'react';
import './Pots.scss';
import PotDetails from './components/PotDetails/PotDetails';
import type { FinanceProps } from '../../interfaces/index';

function Pots({finances}: FinanceProps | any) {
  return ( 
    <div className="main-container-pot-pots">
      <div className="sub-container-pot-heading">
        <h1 id="heading">
          Pots
        </h1>
        <button 
          type="button"
          onClick={() => ""}
        >
          + Add New Pot
        </button>
      </div>
      <div className="sub-container-pot-pots">
        <PotDetails resources={finances.pots} />
      </div>
    </div>
  );
}

export default Pots;