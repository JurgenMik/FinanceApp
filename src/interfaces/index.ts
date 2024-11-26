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

export interface Savings {
    resources: Pot[];
};
  
export interface Pot {
    name: string;
    target: number;
    total: number;
    theme: string; 
};

export interface ViewDetailsProps {
    text: string,
    linkTo: string
};

export interface BalanceProps {
    styleProp: string,
    balance: number,
    heading: string
};

export interface MenuProps {
    handleMinimizeMenu: () => unknown,
    isExpanded: boolean,
    location: string
};

export interface LinkProps {
    isExpanded: boolean,
    path: string,
    page: string,
    location: string,
    Icon: React.ElementType     
};

