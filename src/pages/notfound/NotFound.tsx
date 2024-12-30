import React from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';
import { Logo } from "../../assets/index";

function NotFound() {
  return ( 
    <div className="main-container-not-found">
      <span>
        <img 
          src={Logo} 
          alt="logo" 
        />    
      </span>
      <h1>404 Page Not Found</h1>
      <Link to="/" id="return">
        Return to homepage
      </Link>
    </div>
  );
}

export default NotFound;