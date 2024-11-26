import React from 'react';
import './ViewDetails.scss';
import { Link } from 'react-router-dom';
import { MdArrowRight } from '../../assets/index';
import { ViewDetailsProps } from '../../interfaces';

function ViewDetails({text, linkTo}: ViewDetailsProps) {
  return ( 
    <Link className="main-container-viewDetails" to={linkTo}>
      <p>{text}</p>
      <MdArrowRight id="arrow" />
    </Link>
  );
}

export default ViewDetails;