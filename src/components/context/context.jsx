/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = (props) => {
  const [total, setTotal] = useState(null);
  const [balance, setBalance] = useState(null);
  const [expenses, setExpenses] = useState([]);

  return (
    <DataContext.Provider
      value={{ total, setTotal, expenses, setExpenses, balance, setBalance }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
