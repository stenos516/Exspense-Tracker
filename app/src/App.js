import React from "react";
import { Provider, useSelector } from "react-redux";
import store from "./app/store";
import Navbar from "./components/Navbar";
import AddExpenseForm from "./features/AddExpenseForm";
import ExpensesList from "./features/expenses/ExpensesList";
import Balance from "./components/Balance";

function App() {

  return (
    <Provider store={store}>
      <Navbar />
      <div className="container">
      <Balance />
        <AddExpenseForm />
        <ExpensesList />
      </div>
    </Provider>
  );
}

export default App;