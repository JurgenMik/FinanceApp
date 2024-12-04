import React from 'react';
import './BudgetsGlob.scss';
import Categories from '../../pages/overview/components/Categories/Categories';
import Chart from '../Chart/Chart';
import type { Allocations } from '../../interfaces/index';

function BudgetsGlob({resources, styleProp}: Allocations | any) {
  return ( 
    <div className="main-container-budgetsGlob"
      style={{flexDirection: styleProp}}
    >
      <div className="sub-container-budgetsGlob-chart">
        <Chart resources={resources} />
      </div>
      <div>
        <Categories 
          resources={resources}
          styleProp={'1.5fr'} 
          category={'budgets'}
        /> 
      </div>
    </div>
  );
}

export default BudgetsGlob;