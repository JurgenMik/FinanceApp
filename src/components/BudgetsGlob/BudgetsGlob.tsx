import React from 'react';
import './BudgetsGlob.scss';
import Categories from '../../pages/overview/components/Categories/Categories';
import Chart from '../Chart/Chart';
import type { Allocations } from '../../interfaces/index';

function BudgetsGlob({resources, styleProp, page}: Allocations | any) {
  
  const handleSubContStyleProps = (): object => {
    return ({
      width: page === 'budgets' && '100%',
      height: page === 'budgets' && '20rem'
    });
  }

  return ( 
    <div 
      className="main-container-budgetsGlob"
      style={{flexDirection: styleProp}}
    >
      <div 
        className="sub-container-budgetsGlob-chart"
        style={handleSubContStyleProps()}
      >
        <Chart 
          resources={resources}
          page={page} 
        />
      </div>
      <div>
        {page === 'budgets' && <h2>Spending Summary</h2>}
        <Categories 
          resources={resources}
          styleProp={'1.5fr'} 
          category={'budgets'}
          page={page}
        /> 
      </div>
    </div>
  );
}

export default BudgetsGlob;