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

export const sortOptions = [
  { value: "Latest", label: "Latest" },
  { value: "Oldest", label: "Oldest" },
  { value: "a-to-z", label: "A to Z" },
  { value: "z-to-a", label: "Z to A" },
  { value: "Highest", label: "Highest" },
  { value: "Lowest", label: "Lowest" },
];

export const filterOptions = [
  { value: "All", label: "All Transactions" },
  { value: "Entertainment", label: "Entertainment" },
  { value: "Bills", label: "Bills" },
  { value: "Groceries", label: "Groceries" },
  { value: "Dining Out", label: "Dining Out" },
  { value: "Personal Care", label: "Personal Care" },
  { value: "Education", label: "Education" },
  { value: "LifeStyle", label: "Lifestyle" },
  { value: "Shopping", label: "Shopping" },
  { value: "General", label: "General" },
];
