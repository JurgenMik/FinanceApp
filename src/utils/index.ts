const defaultRoutes: string[] = ['/transactions', '/pots', '/bills', '/', '/budgets'];

export default defaultRoutes;

export const handleCalculateTotals = (entries: unknown[], unit: string): number => {
  return entries.reduce((total: number, entry: any) => total + entry[unit], 0)
};

export const handleFormatDate = (date: string): string => {
  return new Intl.DateTimeFormat('en-GB', 
    {day: '2-digit', month: 'long', year: 'numeric'}).format(new Date(date));
};

