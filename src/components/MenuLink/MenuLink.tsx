import React from 'react';
import './MenuLink.scss';
import { Link } from 'react-router-dom';
import { LinkProps } from '../../interfaces/index';

function MenuLink({path, isExpanded, page, Icon, location}: LinkProps) {
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