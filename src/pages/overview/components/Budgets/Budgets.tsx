import React from 'react';
import './Budgets.scss';
import ViewDetails from '../../../../components/ViewDetails/ViewDetails';
import type { Allocations } from '../../../../interfaces/index';
import BudgetsGlob from '../../../../components/BudgetsGlob/BudgetsGlob';

function Budgets({resources}: Allocations) {
  return ( 
    <div className="main-container-budgets">
      <ViewDetails 
        header={'Budgets'}
        text={'See Details'} 
        linkTo={'/budgets'}
      />
      <BudgetsGlob 
        resources={resources} 
        styleProp={'row'}
        page={''}
      />
    </div>
  );
}

export default Budgets;