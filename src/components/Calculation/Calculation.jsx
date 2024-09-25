import React, { useContext, useState } from "react";
import "./Calculation.style.css";
import { DataContext } from "../context/context";
import ExpenseDisplay from "../ExpenseDisplay/ExpenseDisplay";

function Calculation() {
  const [expense, setExpense] = useState(null);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const data = useContext(DataContext);

  const handleAdd = () => {
    if (expense > 0) {
      data.setTotal(data.total - expense);
      data.setExpenses([...data.expenses, [expense, description, date]]);
    }
  }
  
  return (
    <div>
      <div className="expenseSection">Total Income is Rs {data.total}</div>
      <div className="sectionAdd">
        <div className="title"> Add Expense </div>
        <div>
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
          <button className="button" onClick={handleAdd}>
            {" "}
            ADD{" "}
          </button>
        </div>
      </div>
      {data.expenses.length > 0 ? (
        <div className="display">
          <ExpenseDisplay />
        </div>
      ) : (
        false
      )}
    </div>
  );
}

export default Calculation;
