import React, { useEffect, useState, useMemo, useRef } from 'react';
import './ViewBills.scss';
import type { RecurringBillsState, Transaction } from '../../../../interfaces';
import { handleBillingDateFormat } from '../../../../utils';
import { FaCircleExclamation, FaCheckCircle } from '../../../../assets/index';
import RowHeader from '../../../../components/RowHeader/RowHeader';

function ViewBills({due, paid, upcoming, search, sort}: RecurringBillsState | any) {
  
  const [totalBills, setBills] = useState<Transaction[]>([]);

  const prevSort = useRef(sort);

  useEffect(() => {
    setBills([...due, ...paid, ...upcoming]);
  }, [due, paid, upcoming]);

  const handleSortBills = () => {
    switch (sort) {
      case 'Latest':
        return totalBills.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      case 'Oldest':
        return totalBills.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      case 'a-to-z':
        return totalBills.sort((a, b) => a.name.localeCompare(b.name));
      case 'z-to-a':
        return totalBills.sort((a, b) => b.name.localeCompare(a.name));
      case 'Highest':
        return totalBills.sort((a, b) => b.amount - a.amount);
      case 'Lowest':
        return totalBills.sort((a, b) => a.amount - b.amount);
      default:
        return totalBills;
    }
  };

  const filteredOrSortedBills = useMemo(() => {
    let bills = [...totalBills];

    if (prevSort.current !== sort) { bills = handleSortBills(); }
    
    if (search) {
      bills = bills.filter((bill: Transaction) => bill.name.toLocaleLowerCase()
      .includes(search.toLocaleLowerCase()));
    }

    return bills;

  }, [search, sort, totalBills]);

  return ( 
    <div className="main-container-view-bills"> 
      <RowHeader source={'bills'} />
      <div className="sub-container-view-bills-content">
        {filteredOrSortedBills.map((bill: Transaction) => {
            let category = '';
           
            if (due.some((b: Transaction) => b.name === bill.name && b.date === bill.date)) { category = 'due'}
            else if (paid.some((b: Transaction) => b.name === bill.name && b.date === bill.date)) { category = 'paid'}
            else { category = 'upcoming' }

            return (
              <div className="container-content" key={bill.name + bill.date}>
                <div className="bill-source">
                  <img 
                    src={bill.avatar} 
                    alt="avatar" 
                  />
                  <h2>{bill.name}</h2>
                </div>
                <div className="bill-details">
                  <span>
                    <p
                      style={{color: category === 'paid' ? 'hsl(177, 52%, 32%)' : ''}}
                    >
                      {handleBillingDateFormat(new Date(bill.date))}
                    </p>
                    {category === 'due' ? <FaCircleExclamation id="due" /> : category === 'paid' ? 
                      <FaCheckCircle id="paid" /> : ''
                    }
                  </span> 
                  <p id="amount"
                    style={{color: category === 'due' ? 'hsl(7, 58%, 50%)' : ''}}
                  >
                    ${Math.abs(bill.amount).toFixed(2)}
                  </p>
                </div> 
              </div>
            )
        })}
      </div>
    </div>
  );
}

export default ViewBills;