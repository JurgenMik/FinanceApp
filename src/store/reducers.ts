import { combineReducers } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { TransactionsState } from '../interfaces';

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

const rootReducer = combineReducers({
  transactions: reducerTransactions.reducer
});

export const { setTransactions } = reducerTransactions.actions;

export default rootReducer;
