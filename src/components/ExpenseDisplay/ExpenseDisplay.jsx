import { useContext } from "react";
import "./ExpenseDisplay.css";
import { DataContext } from "../context/context";

function ExpenseDisplay() {
  const data = useContext(DataContext);

  const handleDelete = (i, amt) => {
    const updatedExpenses = data.expenses.filter((_, ind) => ind !== i);
    data.setExpenses(updatedExpenses);
    data.setBalance(Number(data.balance) + Number(amt));
  };

  return (
    <div>
      {data.expenses.map((item, index) => (
        <>
          <div className="expenseContainer" key={index}>
            <div>
              <div className="expenses">
                <span className="bold">Expense Amount:</span> {item[0]}
                <span className="bold mg">Date:</span> {item[2]}
              </div>
              <div className="expenses">
                <span className="bold">Description:</span> {item[1]}
              </div>
            </div>
            <div onClick={() => handleDelete(index, item[0])}>❌</div>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
}

export default ExpenseDisplay;
