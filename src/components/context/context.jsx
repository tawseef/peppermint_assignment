/* eslint-disable react/prop-types */
import { createContext, useState} from "react";

export const DataContext = createContext(null);

export const DataProvider = (props) => {
    const [total, setTotal] = useState(null);
    const [expenses, setExpenses] = useState([]);

  return (
    <DataContext.Provider value={{ total, setTotal, expenses, setExpenses }}>
      {props.children}
    </DataContext.Provider>
  );
};
