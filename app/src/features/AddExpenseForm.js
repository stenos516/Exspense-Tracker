import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { addExpense } from "./expenses/expensesSlice";
import { addIncome } from "../income/incomeSlice";

const AddExpenseForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [isIncome, setIsIncome] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name && amount) {
        const action = isIncome
        ? addIncome({ id: Date.now(), name, amount: parseFloat(amount) }) // Aggiungi reddito
        : addExpense({ id: Date.now(), name, amount: parseFloat(amount), date }); // Aggiungi spesa
    dispatch(action);
    setName('');
    setAmount('');
    setDate('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
          <h2>{isIncome ? "Add Income" : "Add Expense"}</h2>
          <label>
              <input
                  type="checkbox"
                  checked={isIncome}
                  onChange={() => setIsIncome(!isIncome)}
              />
              {isIncome ? " Add Income" : " Add Expense"}
          </label>
          <input
              type="text"
              placeholder={isIncome ? "Income Source" : "Expense Name"}
              value={name}
              onChange={(e) => setName(e.target.value)}
          />
          <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
          />
          {!isIncome && (
              <>
                  <label>Date</label>
                  <input
                      value={date}
                      type="date"
                      onChange={(e) => setDate(e.target.value)}
                  />
              </>
          )}
          <button type="submit">{isIncome ? "Add Income" : "Add Expense"}</button>
      </form>
  );
};

export default AddExpenseForm;