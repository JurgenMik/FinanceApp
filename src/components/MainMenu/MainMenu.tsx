import React from 'react';
import './MainMenu.scss';
import { 
  Logo, 
  BiSolidHome, 
  TbArrowsUpDown, 
  FaChartPie, 
  TbReportMoney, 
  FaMoneyCheck, 
  PiArrowFatLinesLeftFill 
} from "../../assets";

function MainMenu() {
  return (
    <div className="main-container">
      <div className="sub-container-logo">
        <img 
          src={Logo} 
          alt="logo" 
        />
      </div>
      <div className="sub-container-navPages">
        <div className="navPages">
          <BiSolidHome 
            id="icon" 
          />
          <p>Overview</p>
        </div>
        <div className="navPages">
          <TbArrowsUpDown 
            id="icon" 
          />
          <p>Transactions</p>
        </div>
        <div className="navPages">
          <FaChartPie
            id="icon" 
          />
          <p>Budgets</p>
        </div>
        <div className="navPages">
          <TbReportMoney 
            id="icon" 
          />
          <p>Pots</p>
        </div>
        <div className="navPages">
          <FaMoneyCheck 
            id="icon" 
          />
          <p>Recurring Bills</p>
        </div>
      </div>
      <div className="sub-container-minMenu">
        <PiArrowFatLinesLeftFill 
          id="minimize"
         />
        <p>Minimize Menu</p>
      </div>  
    </div>
  );
}

export default MainMenu;