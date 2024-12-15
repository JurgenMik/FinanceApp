import React from 'react';
import './MappingControls.scss';
import { IoIosSearch, TiArrowSortedDown } from '../../assets/index';
import type { MappingControlsProps, Options } from '../../interfaces';
import { sortOptions, filterOptions } from '../../utils/index';

function MappingControls({placeholder, setSearch, setSort, setFilter}: MappingControlsProps) {

  const handlePopulateSelectOpt = (options: Options[]) => {
    return options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  };

  return (
    <div className="main-container-mappings">
      <span id="search-input">
        <input 
          placeholder={placeholder} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setSearch(e.target.value)
          }
          name="search"
        />
        <IoIosSearch 
          id="search" 
          style={{right: placeholder === 'Search Bills' ? '1rem' : '1.5rem'}} 
        />
      </span>
      <span id="sort-input">
        <p>Sort By</p>
        <select
          className="sort-options" 
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
            setSort(e.target.value)
          }
          name="sort"
        >
          {handlePopulateSelectOpt(sortOptions)} 
        </select>
        <TiArrowSortedDown id="select" />
      </span>
      {placeholder === 'Search Transactions' 
        ? 
          <span id="sort-input">
            <p>Category</p>
            <select
              className="sort-options category" 
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                setFilter?.(e.target.value)
              }
              name="filter"
            >
              {handlePopulateSelectOpt(filterOptions)}    
            </select>
            <TiArrowSortedDown id="select" />
          </span>
        : ''
      }
    </div>
  )    
}

export default MappingControls;