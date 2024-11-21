import React from 'react';
import './MainMenu.scss';
import MenuLink from '../MenuLink/MenuLink';
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

interface MenuProps {
  handleMinimizeMenu: () => unknown,
  isExpanded: boolean,
  location: string
}

function MainMenu({handleMinimizeMenu, isExpanded, location}: MenuProps) {
  return (
    <div className={isExpanded ? 'main-container' : 'main-container minimized'}>
      <div className={isExpanded ?'sub-container-logo minimized' : 'sub-container-logo minimized'}>
        <img 
          src={isExpanded ? Logo : LogoSmall}
          alt="logo" 
        />
      </div>
      <div className="sub-container-navPages">
        <MenuLink
          path={'/'}
          isExpanded={isExpanded}
          page={'Overview'}
          Icon={BiSolidHome}
          location={location} 
        />
        <MenuLink
          path={'/transactions'}
          isExpanded={isExpanded}
          page={'Transactions'}
          Icon={TbArrowsUpDown}
          location={location} 
        />
        <MenuLink
          path={'/budgets'}
          isExpanded={isExpanded}
          page={'Budgets'}
          Icon={FaChartPie}
          location={location}
        />
        <MenuLink
          path={'/pots'}
          isExpanded={isExpanded}
          page={'Pots'}
          Icon={TbReportMoney}
          location={location}
        />
        <MenuLink
          path={'/bills'}
          isExpanded={isExpanded}
          page={'Bills'}
          Icon={FaMoneyCheck}
          location={location}    
        />
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