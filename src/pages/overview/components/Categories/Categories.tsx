import React from 'react';
import './Categories.scss';
import type { Savings } from '../../../../interfaces/index';

function Categories({resources}: Savings) {

  const showLimited = resources.slice(0, resources.length -1);
  
  return ( 
    <div className="main-container-categories">
      {showLimited.map((resource) => (
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