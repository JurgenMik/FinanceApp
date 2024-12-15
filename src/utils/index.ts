const defaultRoutes: string[] = ['/transactions', '/pots', '/bills', '/', '/budgets'];

export default defaultRoutes;

export const handleCalculateTotals = (entries: unknown[], unit: string): number => {
  return entries.reduce((total: number, entry: any) => total + entry[unit], 0)
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

  return `Monthly - ${day}${getDaySuffix(day)}`
};

