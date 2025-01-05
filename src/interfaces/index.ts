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

export interface TransactionsState {
    transactions: Transaction[];
};
  
export interface Transaction {
    avatar: string;
    name: string;
    category: string;
    date: string; 
    amount: number;
    recurring: boolean;
};

export interface Allocations {
    resources: Budget[];
};
  
export interface Budget {
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
    header: string,
    text: string,
    linkTo: string
};

export interface BalanceProps {
    styleProp: string;
    balance: number;
    heading: string;
};

export interface MenuProps {
    handleMinimizeMenu: () => unknown;
    isExpanded: boolean;
    location: string;
};

export interface LinkProps {
    isExpanded: boolean;
    path: string;
    page: string;
    location: string;
    Icon: React.ElementType;   
};

export interface RecurringBillsProps {
    title: string;
    amount: string;
    theme: string;
};

export interface RecurringBillsState {
    [key: string]: Transaction[];
};

export interface BillSummaryCategory {
    bills: number;
    amount: number;
};

export interface BillSummaryProps {
    due: BillSummaryCategory;
    paid: BillSummaryCategory;
    upcoming: BillSummaryCategory;
};

export interface MappingControlsProps {
    placeholder: string;
    setSearch: (value: string) => void;
    setSort: (value: string) => void;
    setFilter: ((value: string) => void) | null;
};

export interface Options {
    value: string;
    label: string;  
};

export interface ViewTransactionsProps {
    search: string;
    sort: string;
    filter: string;  
    page: number;
};

export interface PaginateProps {
    page: number;
    setPage: (value: number) => void;
};

export interface ProgressBarProps {
    theme: string;
    progress: number;
    max: number;
    source: string;
};

export interface LatestSpendingProps {
    transactions: Transaction[];
    category: string;
};

export interface FundHeadingProps {
    name: string;
    theme: string;
    source: string;
    handleDeleteFund: (value: string) => void;
    handleEditBudget: (valueA: string, valueB: number) => void;
    max?: number;
};

export interface DeleteModalProps {
    category: string;
    setShowDelete: (value: boolean) => void;
    source: string;
    handleDeleteFund: (value: string) => void;
};

export interface EditBudgetProps {
    category: string;
    setShowEdit: (value: boolean) => void;
    handleEditBudget: (valueA: string, valueB: number) => void;
    max: number;
};

export interface AddModalProps {
    source: string;
    setShowAdd: (value: boolean) => void;
    handleAddNewFund: (value: Budget) => void;
};

