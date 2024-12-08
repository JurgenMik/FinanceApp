import React from 'react';
import './ViewDetails.scss';
import { Link } from 'react-router-dom';
import { MdArrowRight } from '../../assets/index';
import { ViewDetailsProps } from '../../interfaces';

function ViewDetails({header, text, linkTo}: ViewDetailsProps) {
  return ( 
    <div className="main-container-heading">
      <h2>{header}</h2>
      <Link className="sub-container-viewDetails" to={linkTo}>
        <p>{text}</p>
        <MdArrowRight id="arrow" />
      </Link>
    </div>
  );
}

export default ViewDetails;