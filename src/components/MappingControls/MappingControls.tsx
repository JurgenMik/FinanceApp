import React from 'react';
import './MappingControls.scss';
import { IoIosSearch, TiArrowSortedDown } from '../../assets/index';
import type { MappingControlsProps } from '../../interfaces';

function MenuLink({placeholder, setSearch, setSort}: MappingControlsProps) {
  return (
    <div className="main-container-mappings">
      <span id="search-input">
        <input 
          placeholder={placeholder} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setSearch(e.target.value)
          }
        />
        <IoIosSearch id="search" />
      </span>
      <span id="sort-input">
        <p>Sort By</p>
        <select
          className="sort-options" 
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
            setSort(e.target.value)
          }
        >
          <option value="Latest">Latest</option>
          <option value="Oldest">Oldest</option>
          <option value="a-to-z">A to Z</option>
          <option value="z-to-a">Z to A</option>
          <option value="Highest">Highest</option>
          <option value="Lowest">Lowest</option>  
        </select>
        <TiArrowSortedDown id="select" />
      </span>
    </div>
  )    
}

export default MenuLink;