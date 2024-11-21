export interface HoldingsProps {
    balance: Funds;    
};

export interface FinanceProps {
    balance: Funds;
    transactions: Transaction[];
    budgets: Budget[];
    pots: Pot[];
};
  
interface Funds {
    current: number;
    income: number;
    expenses: number;
};
  
interface Transaction {
    avatar: string;
    name: string;
    category: string;
    date: string; 
    amount: number;
    recurring: boolean;
};
  
interface Budget {
    category: string;
    maximum: number;
    theme: string; 
};
  
interface Pot {
    name: string;
    target: number;
    total: number;
    theme: string; 
};