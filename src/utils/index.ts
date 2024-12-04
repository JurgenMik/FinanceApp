const defaultRoutes: string[] = ['/transactions', '/pots', '/bills', '/', '/budgets'];

export default defaultRoutes;

export const handleCalculateTotals = (entries: unknown[], unit: string): number => {
  return entries.reduce((total: number, entry: any) => total + entry[unit], 0)
};

