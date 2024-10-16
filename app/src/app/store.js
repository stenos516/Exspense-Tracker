import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from '../features/expenses/expensesSlice';
import incomeReducer from '../income/incomeSlice';



const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    income: incomeReducer
  },
});

export default store;
