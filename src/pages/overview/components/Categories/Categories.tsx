import React from 'react';
import './Categories.scss';
import type { 
  Savings, 
  Pot, 
  Budget,
  Allocations, 
} from '../../../../interfaces/index';
import BudgetsCategories from '../../../budgets/components/BudgetsCategories/BudgetsCategories';

function Categories({resources, styleProp, category, page}: Savings | Allocations | any) {

  let showLimited = resources;

  if (category === 'pots') { showLimited = resources.slice(0, 4); }

  const handleOverviewCategories = () => {
    return (
      <>
        {showLimited.map((resource: Pot | Budget | any) => (
          <div
            className="container-category"
            key={category === 'pots' ? resource.name : resource.category}
          >
            <span 
              id="theme" 
              style={{backgroundColor: resource.theme}} 
            />
            <div>
              {category === 'pots' ? (
                <>
                  <p id="heading-cat">{resource.name}</p>
                  <p>${resource.total}</p>
                </>
              ) : (
                <>
                  <p id="heading-cat">{resource.category}</p>
                  <p>${resource.maximum.toFixed(2)}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </>
    );
  }

  const handleMainContStyleProps = (): object => {
    return ({
      gridTemplateColumns: styleProp,
      width: page === 'budgets' ? '90%' : '50%'
    });
  }
  
  return ( 
    <div 
      className="main-container-categories"
      style={handleMainContStyleProps()}
    >
      {page === 'budgets' 
        ? <BudgetsCategories resources={showLimited} /> 
        : handleOverviewCategories()
      } 
    </div>
  );
}

export default Categories;