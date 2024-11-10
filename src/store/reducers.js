import { combineReducers } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const reducerPlaceholderA = createSlice({
  name: 'placeA',
  initialState: { value: 0 },
  reducers: {}
});

const reducerPlaceholderB = createSlice({
  name: 'placeB',
  initialState: { value: 0 },
  reducers: {}
});

const rootReducer = combineReducers({
  placeholderA: reducerPlaceholderA.reducer, 
  placeholderB: reducerPlaceholderB.reducer
});

export default rootReducer;
