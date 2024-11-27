import React from 'react';
import './Categories.scss';
import type { Savings, Pot } from '../../../../interfaces/index';

function Categories({resources, styleProp}: Savings | any) {

  const showLimited = resources.slice(0, resources.length -1);
  
  return ( 
    <div className="main-container-categories"
      style={{gridTemplateColumns: styleProp}}
    >
      {showLimited.map((resource: Pot) => (
        <div className="container-category" key={resource.name}>
          <span 
            id="theme"
            style={{backgroundColor: resource.theme}}
          />
          <div>
            <p id="heading-cat">{resource.name}</p>
            <p>${resource.total}</p> 
          </div>
        </div>
      ))} 
    </div>
  );
}

export default Categories;