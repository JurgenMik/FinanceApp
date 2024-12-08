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
import { handleCalculateTotals } from '../../utils';

ChartJS.register(ArcElement, Tooltip);

function Chart({resources}: Allocations) {

  const transactionsState = useSelector((state: {transactions: TransactionsState}) => state.transactions);

  let bgColors: string[] = resources.map((budget) => budget.theme);
  let budgets: number[] = resources.map((budget) => budget.maximum);

  const chartData = {
    datasets: [
      {
        data: budgets,
        backgroundColor: bgColors,
        borderColor: bgColors,
        borderWidth: 1,
        radius: '100%',
        cutout: '50%'
      },
      { 
        data: budgets,
        backgroundColor: "rgba(210, 215, 211, 0.35)",
        borderWidth: 1,
        radius: '100%',
        cutout: '60%'
      },
    ],
  };

  const chartOptions = { responsive: true };
  
  const calculateTotalSummary = (spendings: Transaction[]): number => {
    return Math.abs(handleCalculateTotals(spendings, 'amount'));
  }

  const handleCalcSpendingSummary = (): string => {
    const targetMonth = 7;
    const startDate   = new Date(2024, targetMonth - 1, 2);
    const endDate     = new Date(2024, targetMonth, 31);

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
  
  return (
    <>
      <p id="limit">${spendingSummary}</p>
      <p id="limitTotal">of ${spendingLimit} limit</p>
      <Doughnut data={chartData} options={chartOptions} />
    </> 
  );
}

export default Chart;