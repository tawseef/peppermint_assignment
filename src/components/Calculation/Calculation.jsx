import React, { useContext, useState } from "react";
import "./Calculation.style.css";
import { DataContext } from "../context/context";
import ExpenseDisplay from "../ExpenseDisplay/ExpenseDisplay";

function Calculation() {
  const [expense, setExpense] = useState(null);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [newIncome, setNewIncome] = useState(null);

  const data = useContext(DataContext);

  const handleAdd = (e) => {
    e.preventDefault();
    if (expense > 0) {
      const newExpenses = [
        ...data.expenses,
        [Number(expense), description, date],
      ];
      data.setExpenses(newExpenses);

      const totalExpenses = newExpenses.reduce(
        (acc, ele) => acc + Number(ele[0]),
        0
      );
      const net = data.total - totalExpenses;
      data.setBalance(net);

      setExpense("");
      setDescription("");
      setDate("");
    }
  };

  const handleAddIncome = () => {
    data.setTotal(Number(data.total) + Number(newIncome));
    if (data.expenses.length !== 0) {
      const totalExpenses = data.expenses.reduce(
        (acc, ele) => acc + Number(ele[0]),
        0
      );
      const net = data.total - totalExpenses + Number(newIncome);
      data.setBalance(net);
    }
    setNewIncome("");
  };

  return (
    <div className="outerWrapper">
      <div className="expenseSection">
        <div>Total Income is Rs {data.total}</div>
        <div className="newIncome">
          <input
            type="number"
            placeholder="Enter Income"
            onChange={(e) => setNewIncome(e.target.value)}
            value={newIncome}
            className="incomeBox"
          />
          <button className="incomeBtn" onClick={handleAddIncome}>
            {" "}
            Add Income{" "}
          </button>
        </div>
      </div>
      <div className="sectionAdd">
        <div className="title"> Add Expense </div>
        <div>
          <form onSubmit={(e) => handleAdd(e)}>
            <input
              required
              type="number"
              placeholder="Enter Expense"
              onChange={(e) => setExpense(e.target.value)}
              value={expense}
              className="inputBox"
            />
            <input
              required
              type="text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="inputBox"
            />
            <input
              required
              type="date"
              placeholder="Date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              className="inputBox"
            />
            <button type="submit" className="button">
              {" "}
              ADD{" "}
            </button>
          </form>
        </div>
      </div>
      {data.expenses.length > 0 ? (
        <div className="display">
          <div>
            <ExpenseDisplay />
          </div>
        </div>
      ) : (
        false
      )}
      {data.balance !== null && (
        <div className="expenseSection">Net Balance is Rs {data.balance}</div>
      )}
    </div>
  );
}

export default Calculation;
