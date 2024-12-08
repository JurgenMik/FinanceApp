import { combineReducers } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { TransactionsState, RecurringBillsState } from '../interfaces';

const initTransState: TransactionsState = {
  transactions: [], 
};

const reducerTransactions = createSlice({
  name: 'transactions',
  initialState: initTransState,
  reducers: {
    setTransactions(state, action) {
      state.transactions = action.payload;
    }
  }
});

const initRecurringBillsSate: RecurringBillsState = {
  due: [],
  paid: [],
  upcoming: []
}

const reducerRecurringBills = createSlice({
  name: 'recurring',
  initialState: initRecurringBillsSate,
  reducers: {
    setRecurringBills(state, action) {
      const { key, data } = action.payload; 

      if (key in state) { 
        state[key] = data; 
      }
    }
  }
});

const rootReducer = combineReducers({
  transactions: reducerTransactions.reducer,
  recurringBills: reducerRecurringBills.reducer
});

export const { setTransactions } = reducerTransactions.actions;
export const { setRecurringBills } = reducerRecurringBills.actions;

export default rootReducer;
