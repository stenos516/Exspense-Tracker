import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
    const expenses = useSelector((state) => state.expenses.expenses);
    const income = useSelector((state) => state.income.income);

    const totalExpenses = expenses ? expenses.reduce((acc, exp) => acc + exp.amount, 0) : 0;
    const totalIncome = income ? income.reduce((acc, inc) => acc + inc.amount, 0) : 0;

    const balance = totalIncome - totalExpenses;

    return (
        <div className="balance-container">
            <h2 className="Ttile">Balance</h2>
            <div className="container-dates">
                <div className="container-income">
            <h3>Income ${totalIncome.toFixed(2)}</h3>
            </div>
            <div className="container-expense">
            <h3>Expenses ${totalExpenses.toFixed(2)}</h3>
            </div>
            <div className="container-balance">
            <h3>Total Balance ${balance.toFixed(2)}</h3>
            </div>
            </div>
        </div>
    );
};

export default Balance;

