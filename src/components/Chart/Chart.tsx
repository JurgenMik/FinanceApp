import React from 'react';
import './Chart.scss';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import type { Transaction, TransactionsState, Budget, Allocations } from '../../interfaces/index';
import { handleCalculateTotals, handleGetDateRangeComponents } from '../../utils';
import { handleGetChartConfig } from '../../utils/chart';

ChartJS.register(ArcElement, Tooltip);

function Chart({resources, page}: Allocations | any) {

  const transactionsState = useSelector((state: {transactions: TransactionsState}) => state.transactions);

  let bgColors: string[] = resources.map((budget: Budget) => budget.theme);
  let budgets: number[] = resources.map((budget: Budget) => budget.maximum);

  const chartData = handleGetChartConfig(budgets, bgColors, page)
  const chartOptions = { responsive: true };
  
  const calculateTotalSummary = (spendings: Transaction[]): number => {
    return Math.abs(handleCalculateTotals(spendings, 'amount'));
  }

  const handleCalcSpendingSummary = (): string => {
    const { startDate, endDate } = handleGetDateRangeComponents()

    const budgetCategories = resources.map((budget: Budget) => budget.category);

    const recentSpendings = transactionsState.transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date); 
      
      return transactionDate >= startDate                    && 
             transactionDate <= endDate                      &&
             budgetCategories.includes(transaction.category) &&
             !transaction.recurring;
    });

    return calculateTotalSummary(recentSpendings).toFixed(0);
  }
  
  const spendingLimit   = handleCalculateTotals(resources, 'maximum');
  const spendingSummary = handleCalcSpendingSummary();

  const handleLimitStyleProps = (): object => {
    return ({
      top: page === 'budgets' && '5.75rem',
      fontSize: page === 'budgets' && '2rem',
    });
  }

  const handleTotalLimitStyleProps = (): object => {
    return ({
      top: page === 'budgets' && '10rem',
      fontSize: page === 'budgets' && '0.90rem',
    });
  }
  
  return (
    <>
      <p 
        id="limit"
        style={handleLimitStyleProps()}
      >
        ${spendingSummary}
      </p>
      <p 
        id="limitTotal"
        style={handleTotalLimitStyleProps()}
      >
        of ${spendingLimit} limit
      </p>
      <Doughnut 
        data={chartData} 
        options={chartOptions} 
      />
    </> 
  );
}

export default Chart;