import type { Transaction } from '../interfaces/index';

export const handleCalculateTotals = (entries: unknown[], unit: string): number => {
  return entries.reduce((total: number, entry: any) => total + entry[unit], 0);
};

export const handleFormatDate = (date: string): string => {
  return new Intl.DateTimeFormat('en-GB', 
    {day: '2-digit', month: 'long', year: 'numeric'}).format(new Date(date));
};

export const handleBillingDateFormat = (date: Date): string => {
  const day = date.getDate();

  const getDaySuffix = (day: number) => {
    if (day > 3 && day < 21) return 'th';

    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';

      default: return 'th';
    }
  };

  return `Monthly - ${day}${getDaySuffix(day)}`;
};

export const handleGetDateRangeComponents = () => {
  const targetMonth = 7;
  const startDate   = new Date(2024, targetMonth - 1, 2);
  const endDate     = new Date(2024, targetMonth, 31);

  return { startDate, endDate };
};

export const handleSortEntries = (sort: string, entries: Transaction[], source: string): Transaction[] => {
  switch (sort) {
    case 'Latest':
      return entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    case 'Oldest':
      return entries.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    case 'a-to-z':
      return entries.sort((a, b) => a.name.localeCompare(b.name));
    case 'z-to-a':
      return entries.sort((a, b) => b.name.localeCompare(a.name));
    case 'Highest':
      if (source === 'bills') { return entries.sort((a, b) => a.amount - b.amount); }
      else                    { return entries.sort((a, b) => b.amount - a.amount); }
    case 'Lowest':
      if (source === 'bills') { return entries.sort((a, b) => b.amount - a.amount); }
      else                    { return entries.sort((a, b) => a.amount - b.amount); }
    default:
      return entries;
  }
};

export const handleSpendingByCategory = (transactions: Transaction[], category: string): string => {
  const { startDate, endDate } = handleGetDateRangeComponents()
  
  const recentSpendings = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date); 
    
    return transactionDate >= startDate      && 
           transactionDate <= endDate        &&
           transaction.category === category &&
           !transaction.recurring;
  });

  return Math.abs(handleCalculateTotals(recentSpendings, "amount")).toFixed(2); 
};

export const handleTargetPercentage = (target: number, total: number): string => {
  return (total / target * 100).toFixed(1);
};

const defaultRoutes: string[] = ['/transactions', '/pots', '/bills', '/', '/budgets'];

export default defaultRoutes;
