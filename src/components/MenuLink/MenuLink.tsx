import React from 'react';
import './MenuLink.scss';
import { Link } from 'react-router-dom';
import { LinkProps } from '../../interfaces/index';

function MenuLink({path, isExpanded, page, Icon, location}: LinkProps) {

  const handleLinkMinStyle = () => {
    return ({
      width: !isExpanded ? '52.5%' : '',
      borderTopRightRadius: isExpanded ? '1rem' : '1.10rem',
      borderBottomRightRadius: isExpanded ? '1rem' : '1.10rem'
    })
  }

  return (
    <Link to={path} className={location === path ? 'navigation active' : 'navigation'}
      style={handleLinkMinStyle()}
    >
      <Icon
        id="icon" 
       />
      {isExpanded ? <p>{page}</p> : ''}
    </Link>   
  )    
}

export default MenuLink;