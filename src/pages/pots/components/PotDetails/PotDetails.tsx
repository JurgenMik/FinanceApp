import React from 'react';
import './PotDetails.scss';
import type { Savings, Pot, FinanceProps } from '../../../../interfaces/index';
import FundHeading from '../../../../components/FundHeading/FundHeading';
import ProgressBar from '../../../../components/ProgressBar/ProgressBar';

function PotDetails({finances, resources, setFinanceData}: Savings | any) {

  const handleTargetPercentage = (target: number, total: number) => {
    return (total / target * 100).toFixed(1);
  }

  const handleDeletePot = (fund: string): void => {
    const updatedPots = resources.filter((pot: Pot) => pot.name !== fund);
      
    setFinanceData({...finances, pots: updatedPots});
  }

  const handleEditPot = (fund: string, target: number) => {
    if (target === 0) { return; }
 
    setFinanceData((prevFinances: FinanceProps) => {
      const updatedPots = prevFinances.pots.map((pot: Pot) => {
        if (pot.name === fund) {
          return {...pot, target: target};
        }
        return pot;
      });

      return {...prevFinances, pots: updatedPots};
    });
  }

  return ( 
    <>
      {resources.map((resource: Pot) => {
        return (
          <div 
            className="main-container-pot-details" 
            key={resource.name}
          >
            <div className="sub-container-pot-details-heading">
              <FundHeading 
                name={resource.name}
                theme={resource.theme}
                source='Pot'
                handleDeleteFund={handleDeletePot}
                handleEditBudget={() => ""}
                handleEditPot={handleEditPot}
                target={resource.target}
              />
            </div>
            <div className="sub-container-pot-details">
              <div className="container-saved">
                <h2>Total Saved</h2>
                <p>${resource.total.toFixed(2)}</p>
              </div>
              <div>
                <ProgressBar 
                  theme={resource.theme}
                  progress={resource.total}
                  max={resource.target}
                  source={'Pot'}
                />
                <div className="container-progress">
                  <p id="percentage">
                    {handleTargetPercentage(resource.target, resource.total)}%
                  </p>
                  <p>Target of ${resource.target}</p>
                </div>
              </div>
            </div>
            <div className="sub-container-pot-details-action">
              <button 
                type="button"
                onClick={() => ""}
              >
                + Add Money
              </button>
              <button 
                type="button"
                onClick={() => ""}
              >
                Withdraw
              </button>
            </div>
          </div>
        )
      })}
    </>
  );
}

export default PotDetails;