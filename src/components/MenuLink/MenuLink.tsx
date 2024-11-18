import React from 'react';
import './MenuLink.scss';
import { Link } from 'react-router-dom';

interface Links {
  isExpanded: boolean,
  path: string,
  page: string,
  location: string,
  Icon: React.ElementType
}

function MenuLink({path, isExpanded, page, Icon, location}: Links) {
  return (
    <Link to={path} className={location === path ? 'navigation active' : 'navigation'}>
      <Icon
        id="icon" 
       />
      {isExpanded ? <p>{page}</p> : ''}
    </Link>   
  )    
}

export default MenuLink;