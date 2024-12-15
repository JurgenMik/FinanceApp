import React from 'react';
import './MappingControls.scss';
import { IoIosSearch, TiArrowSortedDown } from '../../assets/index';
import type { MappingControlsProps } from '../../interfaces';

function MenuLink({placeholder, setSearch, setSort, setFilter}: MappingControlsProps) {
  return (
    <div className="main-container-mappings">
      <span id="search-input">
        <input 
          placeholder={placeholder} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setSearch(e.target.value)
          }
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
      {placeholder === 'Search Transactions' 
        ? 
          <span id="sort-input">
            <p>Category</p>
            <select
              className="sort-options category" 
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                setFilter?.(e.target.value)
              }
            >
              <option value="All">All Transactions</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Bills">Bills</option>
              <option value="Groceries">Groceries</option>
              <option value="Dining Out">Dining Out</option>
              <option value="Personal Care">Personal Care</option>
              <option value="Education">Education</option>  
              <option value="LifeStyle">Lifestyle</option>  
              <option value="Shopping">Shopping</option>
              <option value="General">General</option>      
            </select>
            <TiArrowSortedDown id="select" />
          </span>
        : ''
      }
    </div>
  )    
}

export default MenuLink;