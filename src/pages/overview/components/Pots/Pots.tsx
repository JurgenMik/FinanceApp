import React from 'react';
import './Pots.scss';
import ViewDetails from '../../../../components/ViewDetails/ViewDetails';
import Categories from '../Categories/Categories';
import { TbReportMoney } from '../../../../assets/index';
import type { Pot, Savings } from '../../../../interfaces/index';

function Pots({resources}: Savings) {

  const saved = resources.reduce((total: number, pot: Pot) => total + pot.total, 0);

  return ( 
    <div className="main-container-pots">
      <div className="sub-container-pots-heading">
        <h2>Pots</h2>
        <ViewDetails 
          text={'See Details'} 
          linkTo={'/pots'}
        />
      </div>
      <div className="sub-container-pots">
        <div className="sub-container-saved">
          <TbReportMoney id="pots" />
          <div className="container-total">
            <h2>Total Saved</h2>
            <p>${saved}</p>
          </div>
        </div>
        <Categories resources={resources} />
      </div>
    </div>
  );
}

export default Pots;