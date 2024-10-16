import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeExpense } from "./expensesSlice";

const ExpensesList = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.expenses);

  if (!Array.isArray(expenses) || expenses.length === 0) {
    return <p>No expenses available.</p>;
  }

  const handleRemove = (id) => {
    dispatch(removeExpense(id));
  };

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          {expense.name} ${expense.amount} - {expense.date}
          <button onClick={() => handleRemove(expense.id)} style={{ marginLeft: "10px" }}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
