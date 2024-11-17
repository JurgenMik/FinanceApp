import React from 'react';
import { Link } from 'react-router-dom';
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
  isExpanded: boolean,
  location: string
}

function MainMenu({handleMinimizeMenu, isExpanded, location}: Menu) {
  return (
    <div className={isExpanded ? 'main-container' : 'main-container minimized'}>
      <div className={isExpanded ?'sub-container-logo minimized' : 'sub-container-logo minimized'}>
        <img 
          src={isExpanded ? Logo : LogoSmall}
          alt="logo" 
        />
      </div>
      <div className="sub-container-navPages">
        <Link to="/" className={location === '/' ? 'navigation active' : 'navigation'}>
          <BiSolidHome 
            id="icon" 
          />
          {isExpanded ? <p>Overview</p> : ''}
        </Link>
        <Link to="/transactions" className={location === '/transactions' ?' navigation active' : 'navigation'}>
          <TbArrowsUpDown 
            id="icon" 
          />
          {isExpanded ? <p>Transactions</p> : ''}
        </Link>
        <Link to="/budgets" className={location === '/budgets' ? 'navigation active' : 'navigation'}>
          <FaChartPie
            id="icon" 
          />
          {isExpanded ? <p>Budgets</p> : ''}
        </Link>
        <Link to="/pots" className={location === '/pots' ? 'navigation active' : 'navigation'}>
          <TbReportMoney 
            id="icon" 
          />
          {isExpanded ? <p>Pots</p> : ''}
        </Link>
        <Link to="/bills" className={location === '/bills' ? 'navigation active' : 'navigation'}>
          <FaMoneyCheck 
            id="icon" 
          />
          {isExpanded ? <p>Recurring Bills</p> : ''}
        </Link>
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