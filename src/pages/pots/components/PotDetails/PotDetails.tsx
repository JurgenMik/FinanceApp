import React, { useState } from 'react';
import './PotDetails.scss';
import type { Savings, Pot, FinanceProps } from '../../../../interfaces/index';
import FundHeading from '../../../../components/FundHeading/FundHeading';
import ProgressBar from '../../../../components/ProgressBar/ProgressBar';
import TransactionModal from '../TransactionModal/TransactionModal';
import { handleTargetPercentage } from '../../../../utils';

function PotDetails({finances, resources, setFinanceData}: Savings | any) {

  const [showAddOrWithdraw, setShowTransaction] = useState<{
    type: string;
    name: string;
  }>({
    type: "",
    name: "",
  });

  const handleDeletePot = (fund: string): void => {
    const updatedPots = resources.filter((pot: Pot) => pot.name !== fund);
      
    setFinanceData({...finances, pots: updatedPots});
  }

  const handleEditPot = (fund: string, value: number, property: string) => {
    if (value === 0 && property === "target") { return; }

    setFinanceData((prevFinances: FinanceProps) => {
      const updatedPots = prevFinances.pots.map((pot: Pot) => {
        if (pot.name === fund) {
          return {...pot, [property]: value};
        }
        return pot;
      });

      return {...prevFinances, pots: updatedPots};
    });
  }

  const handleShowTransactionModal = (type: string, pot: string) => {
    setShowTransaction({...showAddOrWithdraw, 
      type: type, 
      name: pot
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
                onClick={() => 
                  handleShowTransactionModal("add", resource.name)
                }
              >
                + Add Money
              </button>
              <button 
                type="button"
                onClick={() => 
                  handleShowTransactionModal("withdraw", resource.name)
                }
              >
                Withdraw
              </button>
            </div>
            {showAddOrWithdraw.name === resource.name && showAddOrWithdraw.type &&
              <TransactionModal 
                showAddOrWithdraw={showAddOrWithdraw}
                resource={resource}
                setShowTransaction={setShowTransaction}
                handleEditPot={handleEditPot}
              />
            }
          </div>
        )
      })}
    </>
  );
}

export default PotDetails;