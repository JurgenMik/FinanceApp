import React from 'react';
import './Categories.scss';
import type { Savings, Pot, Allocations} from '../../../../interfaces/index';

function Categories({resources, styleProp, category}: Savings | any) {

  let showLimited = resources;

  if (category === 'pots') { showLimited = resources.slice(0, resources.length -1); }
  
  return ( 
    <div className="main-container-categories"
      style={{gridTemplateColumns: styleProp}}
    >
      {showLimited.map((resource: Pot | Allocations | any) => (
        <div className="container-category" key={category === 'pots' ? resource.name : resource.category}>
          <span 
            id="theme"
            style={{backgroundColor: resource.theme}}
          />
          <div>
            {category === 'pots' 
              ?
                <>
                  <p id="heading-cat">{resource.name}</p>
                  <p>${resource.total}</p> 
                </>
              :
                <>
                  <p id="heading-cat">{resource.category}</p>
                  <p>${(resource.maximum.toFixed(2))}</p> 
                </>
            }
          </div>
        </div>
      ))} 
    </div>
  );
}

export default Categories;