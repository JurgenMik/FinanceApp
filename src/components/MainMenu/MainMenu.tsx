import React from 'react';
import './MainMenu.scss';
import { 
  Logo, 
  LogoSmall,
  BiSolidHome, 
  TbArrowsUpDown, 
  FaChartPie, 
  TbReportMoney, 
  FaMoneyCheck, 
  PiArrowFatLinesLeftFill,
  PiArrowFatLinesRightFill 
} from "../../assets";

interface Menu {
  handleMinimizeMenu: () => unknown,
  isExpanded: boolean
}

function MainMenu({handleMinimizeMenu, isExpanded}: Menu) {
  return (
    <div className={isExpanded ? 'main-container' : 'main-container minimized'}>
      <div className={isExpanded ?'sub-container-logo minimized' : 'sub-container-logo minimized'}>
        <img 
          src={isExpanded ? Logo : LogoSmall}
          alt="logo" 
        />
      </div>
      <div className="sub-container-navPages">
        <div className="navPages">
          <BiSolidHome 
            id="icon" 
          />
          {isExpanded ? <p>Overview</p> : ''}
        </div>
        <div className="navPages">
          <TbArrowsUpDown 
            id="icon" 
          />
          {isExpanded ? <p>Transactions</p> : ''}
        </div>
        <div className="navPages">
          <FaChartPie
            id="icon" 
          />
          {isExpanded ? <p>Budgets</p> : ''}
        </div>
        <div className="navPages">
          <TbReportMoney 
            id="icon" 
          />
          {isExpanded ? <p>Pots</p> : ''}
        </div>
        <div className="navPages">
          <FaMoneyCheck 
            id="icon" 
          />
          {isExpanded ? <p>Recurring Bills</p> : ''}
        </div>
      </div>
      <div className="sub-container-minMenu">
        {isExpanded ?
        <>
          <PiArrowFatLinesLeftFill 
            id="minimize"
            onClick={handleMinimizeMenu}
           />
          <p>Minimize Menu</p>
        </>
        :
        <> 
          <PiArrowFatLinesRightFill
            id="minimize"
            onClick={handleMinimizeMenu}
          />
        </>
        }
      </div>  
    </div>
  );
}

export default MainMenu;